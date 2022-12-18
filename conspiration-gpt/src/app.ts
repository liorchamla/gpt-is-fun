import {
  Observable,
  BehaviorSubject,
  map,
  tap,
  switchMap,
  fromEvent,
} from "rxjs";
import { ajax } from "rxjs/ajax";

const OPENAI_API_KEY = "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";

const disableForm = (state: boolean) => {
  form.ariaDisabled = state.toString();
  personnage1.disabled = state;
  personnage2.disabled = state;
  personnage3.disabled = state;
  theme.disabled = state;
  commanditaires.disabled = state;
};

const setLoadingButton = (state: boolean) => {
  submitButton.setAttribute("aria-busy", state.toString());
  submitButton.disabled = state;
};

const setLoadingResult = (state: boolean) => {
  resultScreen.setAttribute("aria-busy", state.toString());

  if (state === true) {
    resultScreen.innerHTML =
      "En cours de création d'une super théorie du complot";
  }
};

const generateOpenAIPrompt = () =>
  `Ecris le monologue d'un conspirationniste qui pense qu'il existe un complot impliquant ${personnage1.value}, ${personnage2.value} et ${personnage3.value}, sur le thème de ${theme.value}, commandité par ${commanditaires.value} (en étant précis et en citant des faits qui tendent à prouver ses dires) :`;

type OpenAIResponse = {
  choices: {
    text: string;
  }[];
};

const extractAndConvertOpenAIText = (data: OpenAIResponse) =>
  data.choices[0].text
    .split("\n")
    .map((str) => `<p>${str}</p>`)
    .join("");

const form = document.querySelector<HTMLFormElement>("form")!;
const personnage1 = document.querySelector<HTMLInputElement>("#personnage-1")!;
const personnage2 = document.querySelector<HTMLInputElement>("#personnage-2")!;
const personnage3 = document.querySelector<HTMLInputElement>("#personnage-3")!;
const theme = document.querySelector<HTMLInputElement>("#theme")!;
const commanditaires =
  document.querySelector<HTMLInputElement>("#commanditaires")!;

const resultScreen = document.querySelector<HTMLElement>("#result")!;
const submitButton = document.querySelector<HTMLButtonElement>("button")!;

const isLoading$ = new BehaviorSubject(false);

const completions$ = fromEvent<SubmitEvent>(form, "submit").pipe(
  tap((e) => e.preventDefault()),
  map(() => generateOpenAIPrompt()),
  tap(() => isLoading$.next(true)),
  switchMap((prompt) =>
    ajax<OpenAIResponse>({
      url: "https://api.openai.com/v1/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: {
        prompt,
        max_tokens: 2000,
        model: "text-davinci-003",
      },
    }).pipe(
      map((response) => response.response),
      map((data) => extractAndConvertOpenAIText(data))
    )
  ),
  tap(() => isLoading$.next(false))
);

completions$.subscribe((html) => {
  resultScreen.innerHTML = html;
});

isLoading$.subscribe((state) => {
  disableForm(state);
  setLoadingButton(state);
  setLoadingResult(state);
});
