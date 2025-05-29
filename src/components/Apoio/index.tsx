import React, { useState, useEffect } from 'react';
import { useSections } from '../../contexts/SectionContext';
import Titulo from "../_Common/Titulo"
import { 
  ApoiosWrapper,
  TitleHolder
} from './styled'

interface TwitchProps {
	id:string;
}

const Apoios: React.FC<TwitchProps> = ({id}) => {
	const { sections, titles, defaultTitle } = useSections();
  const index = sections.indexOf(id);
  return (
    <>
      <ApoiosWrapper id={id}>
			<TitleHolder>
				<Titulo>[ {titles[index]} ]</Titulo>
			</TitleHolder>
			

      </ApoiosWrapper>
    </>
  )
}

export default Apoios;