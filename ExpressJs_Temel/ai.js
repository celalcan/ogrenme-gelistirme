const chatForm = document.querySelector("#chat-form");
const questionInput = document.querySelector("#question");
const chatLog = document.querySelector("#chat-log");

const apiUrl = "https://api.openai.com/v1/engines/text-davinci-002/completions";
const openaiApiKey = "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";

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${openaiApiKey}`
};

const prompt = "Can you translate the news in the link into Turkish and give it to me? but please no question titles. I want the news with details of the most important parts. https://www.cumhuriyet.com.tr/saglik/kayisinin-faydalari-nelerdir-kayisida-hangi-vitaminler-bulunuyor-kayisi-neye-iyi-gelir-1949808";

const data = JSON.stringify({
  prompt: prompt,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0.75,
  presence_penalty: 0
});

fetch(apiUrl, {
  method: "POST",
  headers: headers,
  body: data
})
  .then(response => response.json())
  .then(json => {
    const answer = json.choices[0].text;
    console.log(`<p>Cevap:</strong> ${answer}</p>`);
  })
  .catch(error => {
    console.error(error);
  });
