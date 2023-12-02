import exp from "constants";
import OpenAI from "openai";

//process.env.OPENAI_API_KEY

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
