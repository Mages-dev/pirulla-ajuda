import React from "react"
import useIsMobile from "../_Common/IsMobile"
import Texto from "../_Common/Texto"
import {
	QR,
	ComponentWrapper,
	ContainerHeader,
	ContainerLogo,
	ContentHeader,
	Link,
	Detalhes
} from './styled'

interface HeaderProps {
	id:string;
}

const Header: React.FC<HeaderProps> = ({id}) => {
	const isMobile = useIsMobile();

	return (
		<ComponentWrapper id={id}>
			<ContainerHeader>
				{isMobile ? (
				<>
				<ContentHeader data-aos="fade-up">
					<Texto>Comunicamos que nosso amigo Pirulla sofreu um AVC (acidente vascular cerebral) na noite do último domingo, 25 de maio, em sua casa, em São Paulo. Ele foi prontamente atendido e está internado em uma UTI (unidade de terapia intensiva), recebendo os cuidados necessários. Apesar do quadro ser estável, ainda inspira atenção, e não há, por enquanto, uma estimativa segura sobre sua recuperação.<br /><br />Diante dessa situação, a comunidade de divulgadores científicos e amigos próximos estão se mobilizando para apoiar sua família e ajudar a manter seus canais em funcionamento, durante esse período de afastamento.<br /><br />Pedimos que evitem especulações e respeitem o tempo de recuperação e a privacidade do Pirulla e de seus familiares. Assim que houver informações consistentes que possam ser compartilhadas, atualizaremos por aqui.<br /><br />Todas as informações serão divulgadas nos canais oficiais: no Canal do Pirulla, na aba comunidades, e nas redes d’Os Três Elementos.<br /><br />Agradecemos, desde já, todo o apoio e solidariedade que temos recebido.<br /><br />Equipe d’Os Três Elementos</Texto>
				</ContentHeader>
				<ContainerLogo>
					<QR src="/qr.png" alt="QR Code" />
					<Detalhes>pirula1408@gmail.com<br /><br />Marcos Siqueira</Detalhes>
				</ContainerLogo>
				</>
				) : (
				<>
				<ContainerLogo>
					<QR src="/qr.png" alt="QR Code" />
					<Detalhes>pirula1408@gmail.com<br /><br />Marcos Siqueira</Detalhes>
				</ContainerLogo>
				<ContentHeader data-aos="fade-up">
				<Texto>Comunicamos que nosso amigo Pirulla sofreu um AVC (acidente vascular cerebral) na noite do último domingo, 25 de maio, em sua casa, em São Paulo. Ele foi prontamente atendido e está internado em uma UTI (unidade de terapia intensiva), recebendo os cuidados necessários. Apesar do quadro ser estável, ainda inspira atenção, e não há, por enquanto, uma estimativa segura sobre sua recuperação.<br /><br />Diante dessa situação, a comunidade de divulgadores científicos e amigos próximos estão se mobilizando para apoiar sua família e ajudar a manter seus canais em funcionamento, durante esse período de afastamento.<br /><br />Pedimos que evitem especulações e respeitem o tempo de recuperação e a privacidade do Pirulla e de seus familiares. Assim que houver informações consistentes que possam ser compartilhadas, atualizaremos por aqui.<br /><br />Todas as informações serão divulgadas nos canais oficiais: no Canal do Pirulla, na aba comunidades, e nas redes d’Os Três Elementos.<br /><br />Agradecemos, desde já, todo o apoio e solidariedade que temos recebido.<br /><br />Equipe d’Os Três Elementos</Texto>
				</ContentHeader>
				</>
				)}
			</ContainerHeader>
		</ComponentWrapper>
	)
}

export default Header