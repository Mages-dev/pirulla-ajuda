import React, { useState, useEffect } from 'react';
import { useSections } from '../../contexts/SectionContext';
import Titulo from "../_Common/Titulo"
import { 
  ContatosWrapper,
  TitleHolder
} from './styled'

interface TwitchProps {
	id:string;
}

const Contatos: React.FC<TwitchProps> = ({id}) => {
	const { sections, titles, defaultTitle } = useSections();
  const index = sections.indexOf(id);
  return (
    <>
      <ContatosWrapper id={id}>
			<TitleHolder>
				<Titulo>[ {titles[index]} ]</Titulo>
			</TitleHolder>
			

      </ContatosWrapper>
    </>
  )
}

export default Contatos;