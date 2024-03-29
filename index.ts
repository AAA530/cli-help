#! /usr/bin/env node

const dotenv = require("dotenv");
dotenv.config();

import { Command } from 'commander';
import { config } from "dotenv";
import OpenAI from "openai";

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
config();

const program = new Command();

program
  .name('cli-help')
  .description('A command line tool for helping developers')
  .version('0.0.1');


const first = (str, options) => {
  const limit = options.first ? 1 : undefined;
  console.log(str);
}

const second = (str, options) => {
  const limit = options.first ? 1 : undefined;
  console.log(str);
}

program
  .option('-f, --first <string>', 'display just the first substring')
  .action(first);

program
  .option('-s, --second <string>', 'display just the first substring')
  .action(second);



async function main() {
  // program
  //   .command('run')
  //   .action(run);
  await program.parseAsync(process.argv);
}

main()
  
// program.parse();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "give mw command to delete a file" }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// console.log(
//   main().then((res) => {
//     console.log(res);
//   })
// );
