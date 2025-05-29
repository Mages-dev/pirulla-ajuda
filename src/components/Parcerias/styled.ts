import styled from "styled-components"

export const ParceriasWrapper = styled.section`
	width: 100%;
	background: ${({ theme }) => theme.colors.fnGrayLight};
	display: flex;
	position: relative;
	background-image: url("/dealbg.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
	background-size: 800px 800px;
	overflow: auto;
	min-height: 100vh;
	padding-bottom: 30px;
	@media (max-width: 799px), (max-height: 799px) {
		background-size: contain;
		background-attachment: scroll;
	}
`

export const TitleHolder = styled.div`
	position: relative;
	width: 95%;
	margin: 0 auto;
	padding-top: 100px;
	padding-left: 100px;
`
