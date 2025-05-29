import React, { useState, useEffect } from 'react';
import { TwitchEmbed } from "react-twitch-embed"
import { useSections } from '../../contexts/SectionContext';
import Titulo from "../_Common/Titulo"
import { 
  TwitchWrapper,
  TitleHolder
} from './styled'

interface TwitchProps {
	id:string;
}

const Twitch: React.FC<TwitchProps> = ({id}) => {
	const { sections, titles, defaultTitle } = useSections();
  const index = sections.indexOf(id);
  return (
    <>
      <TwitchWrapper id={id}>
			<TitleHolder>
				<Titulo>[ {titles[index]} ]</Titulo>
			</TitleHolder>
			

      </TwitchWrapper>
    </>
  )
}

export default Twitch;