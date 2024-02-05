import axios from 'axios'; // Make sure to install axios if not already installed
import { Request, Response } from 'express';
import { envConfig } from '../config/env.config';

export const outboundHandler = async (req: Request, res: Response) => {
  // Extract phoneNumberId, assistantId, and customerNumber from the request body
  const { phoneNumberId, assistantId, customerNumber } = req.body;

  try {
    /**!SECTION
     * Handle Outbound Call logic here.
     * This can initiate an outbound call to a customer's phonenumber using Vapi.
     */
    const response = await axios.post(
      `${envConfig.vapi.baseUrl}/call/phone`,
      {
        phoneNumberId: phoneNumberId,
        assistantId: assistantId,
        customer: {
          number: customerNumber,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${envConfig.vapi.apiKey}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to place outbound call',
      error: error.message,
    });
  }
};
