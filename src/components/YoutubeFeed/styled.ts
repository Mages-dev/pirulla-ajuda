import styled, { css } from 'styled-components';

export const CardHolder = styled.div`
	position: relative;
	background-image: url("/ytbg.svg");
	background-position: top left;
	background-attachment: fixed;
	background-size: 100px 100px;
	overflow: auto;
	min-height: 100vh;
	padding-bottom: 10vh;
`
/* TODO: ajustar tamanho da fonte dos cards para largura de tela entre 930 e 1030px */
export const TitleHolder = styled.div`
	position: relative;
	width: 95%;
	margin: 0 auto;
	padding-top: 100px;
	padding-left: 100px;
	@media (orientation: portrait) {
		padding-left: 15vw;
		& > h2 {
			font-size: 4vw;
		}
	}
`

export const BigCardHolder = styled.div`
	width: 50%;
	margin-left:3%;
	float: left;
	@media (orientation: portrait) {
		width: 100%;
		margin-left:0;
		margin-right:0;
		float: inherit;
	}
`

export const SmallCardHolder = styled.div`
	width: 20%;
	float: right;
	margin-right: 3%;
	@media (orientation: portrait) {
		width: 40%;
		margin-right: 3%;
		margin-left: 5%;
		float: left;
	}
`

export const PhotoFrame = styled.div`
	width: 100%; // Adjust width to parent's width respecting max-widths
	display: inline-block;
	margin-top: 2rem;
	filter: grayscale(0%);
	transition: all 0.35s;
	height: auto; // Adjust height automatically based on content

	&:hover {
		filter: none;
		transform: scale(1.05); // Slight scale up effect on hover
	}
	
	/*&.big {
		width: 50vw;
		height: 45vh;
	}*/

	&:hover {
		filter: none;
		transform: scale(1, 1) rotate(0deg) !important;

		.polaroid:before {
			content: '';
			position: absolute;
			z-index: -1;
			transform: rotate(0deg);
			height: 90%;
			width: 90%;
			bottom: 0%;
			right: 5%;
			box-shadow: 0 1rem 3rem rgba(0,0,0,0.2);
		}
	}

	&:nth-of-type(4n+1) {
		transform: scale(0.9, 0.9) rotate(3deg);
	}

	&:nth-of-type(4n+2) {
		transform: scale(0.8, 0.8) rotate(-5deg);
	}

	&:nth-of-type(4n+3) {
		transform: scale(0.8, 0.8) rotate(-3deg);
	}

	&:nth-of-type(4n+4) {
		transform: scale(0.8, 0.8) rotate(3deg);
	}
`

export const Polaroid = styled.div`
	background: ${({ theme }) => theme.colors.fnWhite};
	padding: 1rem;
	box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);
	cursor: pointer;
	position: relative;

	img {
		max-width: 100%;
		height: auto;
		position: relative !important;
	}

	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		transition: all 0.35s;
	}

	${PhotoFrame}:nth-of-type(4n+1) & {
		&:before {
			transform: rotate(6deg);
			height: 20%;
			width: 47%;
			bottom: 30px;
			right: 12px;
			box-shadow: 0 2.1rem 2rem rgba(0,0,0,0.4);
		}
	}

	${PhotoFrame}:nth-of-type(4n+2) & {
		&:before {
			transform: rotate(-6deg);
			height: 20%;
			width: 47%;
			bottom: 50px;
			left: 12px;
			box-shadow: 0 2.1rem 2rem rgba(0,0,0,0.4);
		}
	}

	${PhotoFrame}:nth-of-type(4n+3) & {
		&:before {
			transform: rotate(-4deg);
			height: 20%;
			width: 47%;
			bottom: 30px;
			left: 12px;
			box-shadow: 0 2.1rem 2rem rgba(0,0,0,0.3);
		}
	}

	${PhotoFrame}:nth-of-type(4n+4) & {
		&:before {
			transform: rotate(4deg);
			height: 20%;
			width: 47%;
			bottom: 30px;
			right: 12px;
			box-shadow: 0 2.1rem 2rem rgba(0,0,0,0.3);
		}
	}
`

export const Caption = styled.div`
	font-size: 1.8rem;
	text-align: center;
	line-height: 1.5em;
	color: ${({ theme }) => theme.colors.fnGrayDarker};

	${PhotoFrame}.small & {
		font-size: 1.25rem;
		text-align: center;
		line-height: 1.5em;
	}

	@media (orientation: portrait) {
		${PhotoFrame}.small & {
			font-size: 1rem;
			text-align: center;
			line-height: 1em;
		}
	}
	@media (min-width: 930px) and (max-width: 1100px) {
		${PhotoFrame}.small & {
			font-size: 1rem;
			text-align: center;
			line-height: 1em;
	}
`
