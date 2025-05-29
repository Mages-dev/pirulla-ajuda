import styled from "styled-components"

const Titulo = styled.h2`
	font-family: 'Typo-Slab-Bold-Italic';
	transform: skew(12deg);  
	font-weight: normal;
	text-transform: uppercase;
	font-size: clamp(2rem, 3.5vw, 2.5rem);
	margin: 0;
	line-height: 1.2;
	letter-spacing: .1vw;
	padding-bottom: 2vh;
	overflow-wrap: break-word; /* Prevent overflow */

	@media (orientation: portrait) {
		font-size: clamp(2rem, 3.5vh, 2.5rem); /* Adjust for portrait */
		line-height: 1.2;
		letter-spacing: .1vh;
		padding-top: 4vh;
	}
`

export default Titulo