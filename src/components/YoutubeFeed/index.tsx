import React, { useState, useEffect } from 'react'
import { useSections } from '../../contexts/SectionContext';
import YoutubeCard from './YoutubeCard'
import Titulo from "../_Common/Titulo"
import {
	CardHolder,
	TitleHolder
} from './styled'

interface Video {
	title: string
	videoId: string
	link: string
	thumbnail: string
}

interface YoutubeFeedProps {
	id:string;
}

const YoutubeFeed: React.FC<YoutubeFeedProps> = ({id}) => {
	const [videos, setVideos] = useState<Video[]>([])

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await fetch('/api/youtube')
				const data: Video[] = await response.json()
				setVideos(data)
			} catch (error) {
				console.error('Error fetching videos:', error)
			}
		}

		fetchVideos()
	}, [])

	const channelCard: Video = {
		title: "Visitar o canal no Youtube!",
		videoId: "FazendoNerdice",
		link: "",
		thumbnail: "/logo2.svg"
	}
	const { sections, titles, defaultTitle } = useSections();
  const index = sections.indexOf(id);
	const videosWithCard = [...videos, channelCard]
	const newArrayOrder = [0, 2, 1, 4, 3];
	const reorderedArray = newArrayOrder
		.filter(index => index < videosWithCard.length)
		.map(index => videosWithCard[index]);

	return (
		<CardHolder id={id}>
			<TitleHolder>
				<Titulo>[ {titles[index]} ]</Titulo>
			</TitleHolder>
			<YoutubeCard videos={reorderedArray} />
		</CardHolder>
	);
};

export default YoutubeFeed