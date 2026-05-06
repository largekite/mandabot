import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: "You are a helpful AI assistant for MandaBot. Conversational AI that responds in kid-friendly English and Mandarin, adapting difficulty to the child's level with pinyin and character output",
    prompt,
    maxTokens: 2048,
  });

  return result.toDataStreamResponse();
}
