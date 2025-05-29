import React, { useState, useEffect } from 'react';
import { useSections } from '../../contexts/SectionContext';
import Titulo from "../_Common/Titulo"
import { 
  ParceriasWrapper,
  TitleHolder
} from './styled'

interface TwitchProps {
	id:string;
}

const Parcerias: React.FC<TwitchProps> = ({id}) => {
	const { sections, titles, defaultTitle } = useSections();
  const index = sections.indexOf(id);
  return (
    <>
      <ParceriasWrapper id={id}>
			<TitleHolder>
				<Titulo>[ {titles[index]} ]</Titulo>
			</TitleHolder>
			

      </ParceriasWrapper>
    </>
  )
}

export default Parcerias;