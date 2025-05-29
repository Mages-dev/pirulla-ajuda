import React, { useState, useEffect } from 'react'
import { useSections } from '../contexts/SectionContext'
import Layout from '../components/Layout'
import Menu from '../components/Menu'

const useActiveSection = (sections:string[], titles:string[], defaultTitle:string) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
					const index = sections.indexOf(entry.target.id)
					if (index >= 0)
					{
						document.title = `${titles[index]} | ${defaultTitle}`
					}
					else
					{
						document.title = `${defaultTitle}`
					}
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections, titles, defaultTitle]);
	
  return activeSection;
};

const Home: React.FC = () => {
	const { sections, titles, defaultTitle, sectionComponents  } = useSections();
	const activeSection = useActiveSection(sections, titles, defaultTitle);
	const [logoOpacity, setLogoOpacity] = useState(100);

	useEffect(() => {
		const headerHeight = document.getElementById('Header')?.offsetHeight || 0;
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const opacity = Math.min(scrollPosition / headerHeight, 1);
			setLogoOpacity(isNaN(opacity) ? 100 : opacity);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Layout>
			<Menu logoOpacity={logoOpacity} activeSection={activeSection} />
      {sections.map((sectionId, index) => {
        const SectionComponent = sectionComponents[sectionId];
        return SectionComponent ? (
          <SectionComponent key={sectionId} id={sectionId} />
        ) : null;
      })}
		</Layout>
	)
}

export default Home