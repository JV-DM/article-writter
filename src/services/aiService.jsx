import cohere from "cohere-ai";
import { COHERE_API_KEY } from "../config/config";
cohere.init(COHERE_API_KEY);

export const aiService = async (tournament, game) => {
    // return await cohere.generate({
    //         prompt: "Once upon a time in a magical land called",
    //         max_tokens: 4096,
    //         temperature: 4,
    //     })
    let dataResult = "";
    const response = await fetch("https://api.cohere.ai/generate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `BEARER ${COHERE_API_KEY}`
        },
        body: JSON.stringify({
            model: 'command-xlarge-nightly',
            prompt: `Write an article about this ${game} tournament. I want the article to contain a brief comment on the most surprising results and the winner: ${tournament}`,
            max_tokens: 878,
            temperature: 0.9,
            k: 0,
            p: 0.75,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: [],
            return_likelihoods: 'NONE'
        })
    }).then((res) => {
        return res.json()
    }).then((data) => {
        dataResult = data
    });

    return await dataResult.text
}