import type { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { accessToken } = await getAccessToken(req, res);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    // Authorization:
    //   'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ilg1clJjclBmS0F6Xzh0aGpXQkw2WCJ9.eyJpc3MiOiJodHRwczovL2Rldi1janVxYnc0aWlvcWpwZXNlLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2NlOTk3MWI0OTU2NDBhOGYyYzQ3MDAiLCJhdWQiOlsiaHR0cHM6Ly9iZWF2ZXJkYW0uc3RlcHplbi5uZXQvYXBpL3dpdGgtYXV0aDAvX19ncmFwaHFsIiwiaHR0cHM6Ly9kZXYtY2p1cWJ3NGlpb3FqcGVzZS51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc0NDg0NzI2LCJleHAiOjE2NzQ1NzExMjYsImF6cCI6IjA4MW9NT3o1TG1pazA2bDdqdlp0V1RwSlZDdXVmRXVWIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.pep_QPgtt2Fvh8HgbB4B2cbNo91RyZwlf649fBSttwH_YGosLHdvEiQHXTpZbGE7j7Jj8FE5Max7k5tWUFwHFR71ZREvZxxJwfk31UEf5U-IbUlKLqh7m_caRkYvpiz6a3Pumt-Vr0P-kSVftRBWw0_6HXuY4uc-zGQ3rRhoI9Y8igdmtABMQy1_Uru_aytnqAm_20uYWs-2DsOUXAVu5S7ZWD1L46VgIXuyOJzehTXF0zrl2uWUO1HCywLDgxd88aZxXtHDzUfH_pW7vR0iQ012F1ieMWzRKWzVksEqb-Fyavbo8uyuYIOOzeZNCemS5XOjLrMiVBql2V41iKmncg',
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
