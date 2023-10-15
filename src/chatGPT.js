const API_KEY = "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"

async function getMessage(task) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": `Generate a flowchart using valid mermaid.js syntax that outlines the process of ${task}` 
        }
      ],
      max_tokens: 100
    })
  }
  try {
    const responseChat = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await responseChat.json()
    console.log(data)
    console.log(data.choices[0].message.content)
  } catch (error) {
    console.error(error);
  }
}

export default getMessage;
