#! /usr/bin/env node

const dotenv = require("dotenv");
dotenv.config();

import { Command } from 'commander';
import { config } from "dotenv";
import OpenAI from "openai";

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
config();

const program = new Command();

const configuration ={}

program
  .name('cli-help')
  .description('A command line tool for helping developers')
  .version('0.0.1');


const first = async (str, options) => {
  // const limit = options.first ? 1 : undefined;
  console.log(str)
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: str.text }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

program
  .option('-q, --question <string>', 'give a prompt to get the answer')
  .action(first);



async function main() {
  await program.parseAsync(process.argv);
}

main()
