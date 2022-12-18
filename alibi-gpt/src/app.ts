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

const form = document.querySelector<HTMLFormElement>("form")!;
const theme1 = document.querySelector<HTMLInputElement>("#theme-1")!;
const theme2 = document.querySelector<HTMLInputElement>("#theme-2")!;
const theme3 = document.querySelector<HTMLInputElement>("#theme-3")!;
const statut = document.querySelector<HTMLInputElement>("#statut")!;
const nom = document.querySelector<HTMLInputElement>("#nom")!;

const resultScreen = document.querySelector<HTMLElement>("#result")!;
const submitButton = document.querySelector<HTMLButtonElement>("button")!;
const copyButton = document.querySelector<HTMLButtonElement>("#copy")!;

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(resultScreen.textContent!);
});

const disableForm = (state: boolean) => {
  form.ariaDisabled = state.toString();
  theme1.disabled = state;
  theme2.disabled = state;
  theme3.disabled = state;
  statut.disabled = state;
  nom.disabled = state;
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

const generateOpenAIPrompt = () => {
  const themes = [theme1.value, theme2.value, theme3.value]
    .filter((v) => v.trim() !== "")
    .join(", ");

  const prompt = `Génère un mot d'excuse pour ${statut.value} qui s'appelle ${nom.value} pour une absence impliquant ${themes}, n'oublies pas de donner beaucoup de détails :
  `;

  return prompt;
};

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

const isLoading$ = new BehaviorSubject(false);

const completions$ = fromEvent<SubmitEvent>(form, "submit").pipe(
  tap(() => (copyButton.style.display = "none")),
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
  copyButton.style.display = "block";
  resultScreen.innerHTML = html;
});

isLoading$.subscribe((state) => {
  disableForm(state);
  setLoadingButton(state);
  setLoadingResult(state);
});
