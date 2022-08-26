import styled, { keyframes } from "styled-components";

import type { ILoading } from "./typings";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotateSvg = styled.svg`
  display: inline-block;
  animation: ${rotate} 1.2s linear infinite;
`;

const Loading = ({ size = 20, color = "#42A4EF", ...rest }: ILoading) => {
  return (
    <RotateSvg
      className="loading"
      width={size}
      height={size}
      viewBox={`0 0 16 16`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 1.75C6.76387 1.75 5.55549 2.11656 4.52769 2.80331C3.49988 3.49007 2.6988 4.46619 2.22575 5.60823C1.75271 6.75027 1.62893 8.00693 1.87009 9.21931C2.11125 10.4317 2.7065 11.5453 3.58058 12.4194C4.45466 13.2935 5.5683 13.8888 6.78068 14.1299C7.99307 14.3711 9.24973 14.2473 10.3918 13.7742C11.5338 13.3012 12.5099 12.5001 13.1967 11.4723C13.8834 10.4445 14.25 9.23613 14.25 8"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </RotateSvg>
  );
};

export { Loading };
