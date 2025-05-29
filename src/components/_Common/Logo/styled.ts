import styled from "styled-components";

export const Logotipo = styled.img`
	width: 40vw;
	height: auto;
	max-width: 600px;
	max-height: 600px;
	object-fit: contain;

	&.shrink {
		width: 5vw;
		height: auto;
		max-width: 5vw;
		max-height: 5vw;
	}

	@media (orientation: portrait) {
		width: 70vw;
		min-width: 50vw;
		max-width: 80vw;
	}
`