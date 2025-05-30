import React, { ReactNode, createContext, useContext } from 'react';
import Header from '../components/Header'

interface SectionComponentProps {
  id: string;
}

type SectionComponentsType = {
  [key: string]: React.FC<SectionComponentProps>;
}

const sectionComponents: SectionComponentsType = {
  home: Header,
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