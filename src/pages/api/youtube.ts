import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import xml2js from 'xml2js';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCiP4JMEbjjmdjGuw7ZRFRPQ';
		const response = await axios.get(url);
		const parser = new xml2js.Parser({ explicitArray: false });
		const result = await parser.parseStringPromise(response.data);

		const entries = result.feed.entry;
		if (!entries) {
			res.status(404).json({ message: 'Nenhum video encontrado' });
			return;
		}

		const videos = entries.slice(0, 4).map((entry: any) => ({
			title: entry.title,
			videoId: entry['yt:videoId'],
			link: entry.link.href,
			thumbnail: entry['media:group']['media:thumbnail']['$'].url
		}));

		res.status(200).json(videos);
	} catch (error) {
		console.error('Erro ao obter videos do YouTube:', error);
		res.status(500).json({ message: 'Erro ao obter videos do YouTube' });
	}
}
