import styled from "styled-components"

const Texto = styled.h1`
	font-family: 'Cabin';
	font-weight: normal;
	font-size: clamp(1.5rem, 3vw, 2rem); /* Adjust the min and max sizes as needed */
	margin: 0;
	line-height: 1.3; /* Adjust based on design requirements */
	letter-spacing: 0.1vw;
	overflow-wrap: break-word;
	margin-top: 80px;
	margin-bottom: 80px;

	@media (orientation: portrait) {
		font-size: clamp(1.5rem, 3vw, 2rem); /* Adjust the min and max sizes as needed */
		line-height: 1.3; /* Adjust based on design requirements */
		letter-spacing: 0.1vw;
	}
`

export default Texto