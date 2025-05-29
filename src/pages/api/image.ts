import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const imageUrl: string | string[] | undefined = req.query.imageUrl;

  // Validate the imageUrl query parameter
  if (!imageUrl || typeof imageUrl !== 'string') {
    res.status(400).json({ error: 'Missing or invalid imageUrl query parameter' });
    return;
  }

  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
    });

    // Set the content type header to the image type
    res.setHeader('Content-Type', response.headers['content-type']);

    // Stream the image data back to the client
    res.send(response.data);
  } catch (error) {
    console.error('Failed to fetch image:', error);
    res.status(500).json({ error: 'Failed to proxy image' });
  }
}
