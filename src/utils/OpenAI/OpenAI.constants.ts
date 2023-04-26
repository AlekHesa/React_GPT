import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "gpt-3.5-turbo": {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    maxLimit: 4096,
  },
  "gpt-3.5-turbo-0301": {
    id: "gpt-3.5-turbo-0301",
    name: "GPT-3.5 Turbo (03/01)",
    maxLimit: 4096,
  },
};
