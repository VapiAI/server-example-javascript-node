import { basic } from './basic';
import { openaiAdvanced } from './openai-advanced';
import { openaiSSE } from './openai-sse';

export const customLLMHandler = {
  basic: basic,
  openaiAdvanced: openaiAdvanced,
  openaiSSE: openaiSSE,
};
