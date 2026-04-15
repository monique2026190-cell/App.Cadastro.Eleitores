
import { Request, Response } from 'express';

export const logMessage = (req: Request, res: Response) => {
  const { message } = req.body;
  console.log('Frontend Log:', message);
  res.status(200).send('Log received');
};
