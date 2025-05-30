import styled from "styled-components"

export const ComponentWrapper = styled.header`
	width: 100vw;
	height: 100vh;
	background-position: top left;
	background-attachment: fixed;
	background-size: 75px 75px;
	display: flex;
	flex-direction: column;
	padding-top: 30px; /* Leave space for MenuBar */
	@media (max-width: 768px) {
		padding-top: 10px; /* Slightly larger space for smaller screens */
	}
	/*
	align-items: center;
	justify-content: center;
	padding-top: 0;
	*/
`

export const ContainerHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 50px);
	color: ${({ theme }) => theme.colors.fnWhite};
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: calc(100vh - 30px); /* Adjust height for mobile */
		padding: 20px;
	}
`

export const ContainerLogo = styled.div`
	justify-self: end;
	padding-right: 2vw;
	color: ${({ theme }) => theme.colors.fnWhite};
	@media (max-width: 768px) {
		margin: 0 auto 20px auto; /* Center logo at the bottom */
		padding: 0;
	}
`

export const ContentHeader = styled.div`
	justify-self: start;
	max-width: 90%;
	padding-left: 2vw;
	color: ${({ theme }) => theme.colors.fnWhite};
	box-sizing: border-box;

	@media (max-width: 768px) {
		max-width: 90vw;
		text-align: center;
		margin-top: 150px;
	}
`

export const Link = styled.a`
  color: orange; /* Fonte branca em todos os estados */
  text-decoration: none; /* Remove sublinhado por padrão */
  cursor: pointer; /* Cursor de mão padrão de links */

  &:hover {
  	color: white;
    text-decoration: underline; /* Sublinhado no estado hover */
  }
`;

export const QR = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 10px;

	@media (max-width: 768px) {
	  width: 300px;
	  height: 300px;
		margin-left: calc((100vw - 300px) / 3);
	}`;

export const Detalhes = styled.h3`
	font-family: 'Cabin';
	font-weight: normal;
	font-size: clamp(1rem, 1.5vw, 1rem); /* Adjust the min and max sizes as needed */
	text-align: center;
	margin: 0;
	margin-top: 10px;
	margin-bottom: 80px;
	line-height: 1.3; /* Adjust based on design requirements */
	letter-spacing: 0.1vw;
	overflow-wrap: break-word;
	color: orange;
	@media (orientation: portrait) {
		font-size: clamp(1.5rem, 3vw, 2rem); /* Adjust the min and max sizes as needed */
		line-height: 1.3; /* Adjust based on design requirements */
		letter-spacing: 0.1vw;
	}
`;