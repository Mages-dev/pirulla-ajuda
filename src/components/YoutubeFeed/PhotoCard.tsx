import Image from 'next/image'
import React from 'react'

import {
	PhotoFrame,
	Polaroid,
	Caption
} from './styled'


export type PhotoCardProps = {
	children: React.ReactNode,
	youtubeVideoId: string,
	imageUrl: string,
	altText: string,
    cardSize: string
} & React.HTMLAttributes<HTMLDivElement>

const PhotoCard = ({ 
	cardSize,
	imageUrl, 
	youtubeVideoId, 
	altText = '',
	children, 
	...props }: PhotoCardProps) => {
		const handleClick = () => {
			window.open(youtubeVideoId === 'FazendoNerdice' ? `https://youtube.com/@${youtubeVideoId}` : `https://youtu.be/${youtubeVideoId}`, '_blank', 'noopener,noreferrer');
		};
	return (
		<PhotoFrame className={`photocard ${cardSize}`} {...props}>
			<Polaroid
				className={`polaroid cursor-pointer`}
				onClick={handleClick}
				role="link"
				tabIndex={0}
				onKeyPress={(e) => e.key === 'Enter' && handleClick()}
			>
				<Image
					src={youtubeVideoId === 'FazendoNerdice' ? imageUrl : `/api/image?imageUrl=${encodeURIComponent(imageUrl)}`}
					alt={altText}
					layout="fill"
					objectFit="contain"
				/>
				<Caption className="caption">
					{ children }
				</Caption>
			</Polaroid>
		</PhotoFrame>
	)
}
export default PhotoCard