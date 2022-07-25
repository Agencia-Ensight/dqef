import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
    }

    :root{
			--blue: #42A4EF;
			--warning: #E6DE22;
			--danger: #ED3561;
			--success: #6FDA73;

			/* linear */
			--blue-linear:linear-gradient(180deg, #56CCF2 0%, #2F80ED 100%);
			--warning-linear:linear-gradient(190.27deg, #EDE635 6.53%, #E6DE22 91.31%);
			--danger-linear: linear-gradient(190.27deg, #ED3561 6.53%, #CD1743 91.31%), #ED3561;
			--success-linear:linear-gradient(190.27deg, #35ED68 6.53%, #17CD4A 91.31%), #6FDA73;

			/* background */
			--button-background: #1A1A1A;
			--main-background: #FAFAFA;
			--disable-background: #E0E0E0;
			--white-background: #FFFFFF;
			--blueish-background: #F8FCFF;

			/* text */
			--black-text: #000000;
			--title-text: #000000;
			--body-text: #2C2C2C;
			--content-text: #4E4E4E;
			--label-text: #53647E;
			--placeholder-text: #848484;
			--muted-text: #969696;
			--white-text: #FFFFFF;

			/* stroke */
			--blue-stroke: #42A4EF;
			--gray-stroke: #D1D1D1;
    }

    html, body, #__next {
			min-height: 100%;
			height: 100vh;
			display: flex;
			flex-direction: column;
			scroll-behavior: smooth;
    }

    #__next {
			height: 100vh;
			display: flex;
			flex-direction: column;
    }

    body {
			background: #fafafa !important;
			font-family: 'Lato', sans-serif;
    }

	button, input[type="submit"], input[type="reset"] {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
`;
