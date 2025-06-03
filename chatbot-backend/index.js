const express = require('express');
const cors = require('cors');
require('dotenv').config(); // ✅ Esto carga las variables del .env

const { OpenAI } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Usa este si no tienes acceso a GPT-4
      messages: [{ role: 'user', content: message }],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (err) {
    console.error('❌ Error al llamar a OpenAI:', err);
    res.status(500).json({ error: 'Fallo al generar respuesta' });
  }
});

app.listen(3001, () => console.log('✅ Servidor corriendo en http://localhost:3001'));
