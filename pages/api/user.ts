import {NextApiRequest, NextApiResponse} from 'next/dist/shared/lib/utils';

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const data = await (
      await fetch('http://localhost:8080/user', {
        method: 'GET',
      })
    ).json();

    res.status(200).json(data);
  }
  if (req.method === 'POST') {
    console.log(req.body);
    const data = await (
      await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      })
    ).json();
    res.status(201).json(data);
  }
}

export default handler;
