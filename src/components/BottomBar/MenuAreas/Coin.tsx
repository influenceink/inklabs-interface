import { styled } from '@mui/material';

export const Coin = () => {
  return (
    <SVG
      id="coin_main"
      data-name="coin main"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="227.361"
      height="227.361"
      viewBox="0 0 227.361 227.361"
    >
      <defs>
        <clipPath id="clip-path-c">
          <rect
            id="Rectangle_350"
            data-name="Rectangle 350"
            width="227.361"
            height="227.361"
            fill="none"
            stroke="rgba(0,0,0,0)"
            strokeWidth="3"
          />
        </clipPath>
      </defs>
      <g id="Group_982" data-name="Group 982" clipPath="url(#clip-path-c)">
        <path
          id="Path_2453"
          data-name="Path 2453"
          d="M227.992,101.043c-.055-.4-.114-.8-.173-1.2A112.44,112.44,0,0,0,116.521,4,112.466,112.466,0,0,0,5.223,99.839q-.09.6-.173,1.2A113.8,113.8,0,0,0,4,116.521a112.16,112.16,0,0,0,14.932,56.062c.232.4.473.8.71,1.2a111.852,111.852,0,0,0,10.4,14.729c.419.5.839,1,1.267,1.5q2.7,3.125,5.645,6.071a112.426,112.426,0,0,0,159.129,0q2.944-2.944,5.645-6.071c.428-.5.848-1,1.266-1.5a111.855,111.855,0,0,0,10.4-14.729c.237-.4.478-.8.71-1.2a112.152,112.152,0,0,0,14.932-56.062A113.8,113.8,0,0,0,227.992,101.043Z"
          transform="translate(-2.841 -2.841)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <text
          id="INKCOIN"
          transform="translate(113.181 124.232)"
          fill="#fff"
          fontSize="18"
          fontFamily="SegoeUI, Segoe UI"
          letterSpacing="0.12em"
        >
          <tspan x="-41.676" y="0">
            INKCOIN
          </tspan>
        </text>
      </g>
    </SVG>
  );
};

const SVG = styled('svg')`
  & > g:hover {
    path {
      fill: #ffffff;
    }
    text {
      fill: #000000;
    }
  }
  & > g {
    cursor: pointer;
  }
  margin: -86px 4px -51px 4px;
  z-index: 9999;
`;
