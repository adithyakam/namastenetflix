import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_GPT_KEY, // defaults to process.env["OPENAI_API_KEY"]
//   dangerouslyAllowBrowser: true,
// });

const ans = {
  index: 0,
  message: {
    role: "assistant",
    content: "Andaz Apna Apna, Hera Pheri, 3 Idiots, Dil Chahta Hai, Bheja Fry",
  },
  finish_reason: "stop",
};

export async function chatQuery(query) {
  const chatgptPromt =
    "Act as the Movie recomendation Engine. give list of 5 movie sugggestion & recomendation for the query: " +
    query +
    "please share the results in the comma separated in  movie names only dont include any serial numbers as the next example. example: idiots, jawan, batman, superman, justice league";

  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: chatgptPromt }],
  //     model: "gpt-3.5-turbo",
  //   });

  //for constant response
  return ans.message.content;

  //   for actual
  //   console.log(chatCompletion.choices[0].message.content);
  //   return chatCompletion.choices[0].message.content;

  //   console.log(chatCompletion.choices);
}
