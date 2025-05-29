import React from 'react';
import PhotoCard from './PhotoCard'
import {
	BigCardHolder,
	SmallCardHolder
} from './styled'

interface Video {
	title: string;
	videoId: string;
	link: string;
	thumbnail: string;
}

interface YoutubeCardProps {
	videos: Video[]
}

const YoutubeCard: React.FC<YoutubeCardProps> = ({ videos }) => {
	return (
		<>
		{videos.map((video, index) => {
			const CardHolder = index === 0 ? BigCardHolder : SmallCardHolder
			return (
				<CardHolder key={video.videoId}>
					<PhotoCard 
						cardSize={index === 0 ? 'big' : 'small'}
						imageUrl={video.thumbnail}
						youtubeVideoId={video.videoId} 
						altText={video.title}
					>{video.title}</PhotoCard>
				</CardHolder>
			)	
		})}
		</>
	)
}

export default YoutubeCard