#! /usr/bin/env node

const dotenv = require("dotenv");
dotenv.config();

import { Command } from 'commander';
import { config } from "dotenv";
import OpenAI from "openai";

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
config();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "tell me the ." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

console.log(
  main().then((res) => {
    console.log(res);
  })
);
