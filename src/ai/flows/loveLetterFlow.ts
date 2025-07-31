
'use server';

/**
 * @fileOverview A dialog-based game flow for revealing a love letter.
 * 
 * - getLoveLetterResponse - A function that handles the dialog logic.
 * - LoveLetterResponse - The return type for the getLoveLetterResponse function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const LoveLetterResponseSchema = z.object({
  reply: z.string().describe('The character\'s spoken reply to the user.'),
  options: z.array(z.string()).describe('The dialog choices for the user.'),
  nextStage: z.string().describe("The name of the next stage in the conversation."),
  finalLetter: z.string().optional().describe("The final love letter content, only provided in the 'final' stage."),
});
export type LoveLetterResponse = z.infer<typeof LoveLetterResponseSchema>;

export async function getLoveLetterResponse(stage: string, userChoice: string): Promise<LoveLetterResponse> {
  const { output } = await loveLetterFlow({ stage, userChoice });
  return output!;
}

const loveLetterFlow = ai.defineFlow(
  {
    name: 'loveLetterFlow',
    inputSchema: z.object({
      stage: z.string(),
      userChoice: z.string(),
    }),
    outputSchema: LoveLetterResponseSchema,
  },
  async ({ stage, userChoice }) => {
    let prompt = '';

    if (stage === 'start') {
        prompt = `You are a person who is shyly trying to give a love letter to your girlfriend, Yve. 
        Start the conversation. You're a bit nervous.
        Your reply should be your first line of dialogue. 
        Give two options for her to respond.
        The next stage is 'reassure'.`;
    } else if (stage === 'reassure') {
        prompt = `You are a person who is shyly trying to give a love letter to your girlfriend, Yve. 
        She just responded with: "${userChoice}".
        You are still a bit shy, but you're trying to work up the courage. Say something to hint that you have a gift for her.
        Give two encouraging options for her to respond.
        The next stage is 'reveal'.`;
    } else if (stage === 'reveal') {
        prompt = `You are a person who is shyly trying to give a love letter to your girlfriend, Yve. 
        She just responded with: "${userChoice}".
        You are now ready to give her the letter. Your reply should be you presenting the letter.
        Give two options that show her accepting it.
        The next stage is 'final'.`;
    } else if (stage === 'final') {
        // This is the final letter generation, not a dialog turn.
        const { output: letterOutput } = await ai.generate({
            prompt: `Write a short, heartfelt love letter to your girlfriend, Yve.
            Explain that you made this whole website for her to show how much you truly love her.
            Tell her you will always be there for her and that you hope this website gives her comfort and makes her feel appreciated.
            Keep it to about 3-4 sentences. Sign it with love, but don't add your name.`
        });
        
        return {
            reply: "Here... it's for you.",
            options: [],
            nextStage: 'end',
            finalLetter: letterOutput!.text,
        };
    }
    
    const { output } = await ai.generate({
        prompt,
        output: { schema: LoveLetterResponseSchema },
        model: 'googleai/gemini-2.0-flash', // Using a more capable model for structured output
    });

    return output!;
  }
);
