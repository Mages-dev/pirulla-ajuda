import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Typo-Slab-Bold-Italic';
		src:url('/fonts/typo/Typo-Slab-Bold-Italic.ttf.woff') format('woff'),
				url('/fonts/typo/Typo-Slab-Bold-Italic.ttf.svg#Typo-Slab-Bold-Italic') format('svg'),
				url('/fonts/typo/Typo-Slab-Bold-Italic.ttf.eot'),
				url('/fonts/typo/Typo-Slab-Bold-Italic.ttf.eot?#iefix') format('embedded-opentype'); 
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-Regular-TTF.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-Italic-TTF.ttf') format('truetype');
		font-weight: normal;
		font-style: italic;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-Bold-TTF.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-BoldItalic-TTF.ttf') format('truetype');
		font-weight: bold;
		font-style: italic;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-Medium-TTF.ttf') format('truetype');
		font-weight: 500; /* Medium */
		font-style: normal;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-MediumItalic-TTF.ttf') format('truetype');
		font-weight: 500; /* Medium */
		font-style: italic;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-SemiBold-TTF.ttf') format('truetype');
		font-weight: 600; /* SemiBold */
		font-style: normal;
	}

	@font-face {
		font-family: 'Cabin';
		src: url('/fonts/cabin/Cabin-SemiBoldItalic-TTF.ttf') format('truetype');
		font-weight: 600; /* SemiBold */
		font-style: italic;
	}

	* {
		box-sizing: border-box;
	}
	html, body
	{
		overflow-x: hidden;
	}
	body {
		background-color: ${({ theme }) => theme.colors.fnGrayDarker};
		color: ${({ theme }) => theme.colors.fnWhite};
		font-family: 'Cabin', sans-serif;
	}
`;

export default GlobalStyle;
