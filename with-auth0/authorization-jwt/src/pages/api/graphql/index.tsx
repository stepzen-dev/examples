import type { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { accessToken } = await getAccessToken(req, res);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const body = req.body;

  try {
    const response = await fetch(process.env?.STEPZEN_ENDPOINT || '', {
      method: 'POST',
      headers,
      body,
    });

    const json = await response.json();

    res.status(200).json(json);
  } catch (e: unknown) {
    const message = (e as Error).message;

    res.status(500).json({ error: message });
  }
});
