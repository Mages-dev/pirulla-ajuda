import React, { useEffect } from "react"
import useIsMobile from "../_Common/IsMobile"
import Logo from "../_Common/Logo"
import Titulo from "../_Common/Titulo"
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
					<Texto>[O texto de divulgação ficará aqui].<br /><br />Muito obrigado!</Texto>
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
				<Texto>[O texto de divulgação ficará aqui].<br /><br />Muito obrigado!</Texto>
				</ContentHeader>
				</>
				)}
			</ContainerHeader>
		</ComponentWrapper>
	)
}

export default Header