import styled from "styled-components"

export const TwitchWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.fnGrayDarker};
  display: flex;
  position: relative;
	background-image: url("/twbg.svg");
	background-position: top left;
	background-attachment: fixed;
	background-size: 100px 100px;
	overflow: auto;
  min-height: 100vh;
  padding-bottom: 30px;
`

export const TitleHolder = styled.div`
	position: relative;
	width: 95%;
	margin: 0 auto;
	padding-top: 100px;
  padding-left: 100px;
`
