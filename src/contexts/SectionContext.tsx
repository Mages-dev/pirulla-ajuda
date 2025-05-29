import React, { ReactNode, createContext, useContext } from 'react';
import Header from '../components/Header'
import YoutubeFeed from '../components/YoutubeFeed'
import Twitch from '@/components/Twitch'
import Parcerias from '@/components/Parcerias'
import Apoio from '@/components/Apoio'
import Contato from '@/components/Contato'

interface SectionComponentProps {
  id: string;
}

type SectionComponentsType = {
  [key: string]: React.FC<SectionComponentProps>;
}

const sectionComponents: SectionComponentsType = {
  home: Header/*,
  'latest-releases': YoutubeFeed,
  lives: Twitch,
  partnership: Parcerias,
  support: Apoio,
  contact: Contato,*/
}

const defaultValues = {
  sections: Object.keys(sectionComponents),
  titles: ['O Pirulla PRECISA da sua ajuda!'],
  defaultTitle: "Canal do Pirulla",
  sectionComponents,
};

const SectionContext = createContext(defaultValues);

export const useSections = () => useContext(SectionContext);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SectionContext.Provider value={defaultValues}>
      {children}
    </SectionContext.Provider>
  );
};