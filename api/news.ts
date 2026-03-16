import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { category } = req.query;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category ?? ""}&pageSize=30&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ message: 'Failed to fetch news' });
  }
}