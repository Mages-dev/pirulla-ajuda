import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			fnWhite: string;
			fnOrange: string;
			fnGrayLighter: string;
			fnGrayLight: string;
			fnGrayDarker: string;
			// Add other color and theme definitions here
		};
		// Extend your theme interface as needed
	}
}
