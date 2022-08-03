import { styled, useMediaQuery } from '@mui/material';
interface Props {
  onMenuClick: (path: string) => void;
}
export const Coin = ({ onMenuClick }: Props) => {
  const sm = useMediaQuery('(max-width: 1350px)');
  return !sm ? (
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
      <g
        id="Group_982"
        data-name="Group 982"
        clipPath="url(#clip-path-c)"
        onClick={() => {
          onMenuClick('/coin');
        }}
      >
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
  ) : (
    <SVG xmlns="http://www.w3.org/2000/svg" width="131.531" height="131.531" viewBox="0 0 131.531 131.531">
      <g
        id="coin"
        transform="translate(-149.143 -339.223)"
        onClick={() => {
          onMenuClick('/coin');
        }}
      >
        <path
          id="Path_478"
          data-name="Path 478"
          d="M1157.1,1383.531q-.048-.35-.1-.7a65.274,65.274,0,0,0-129.112,0c-.034.233-.068.466-.1.7a66.017,66.017,0,0,0-.609,8.978,65.05,65.05,0,0,0,8.661,32.517c.135.234.274.466.412.7a64.873,64.873,0,0,0,6.034,8.543c.243.291.486.582.735.869q1.567,1.812,3.275,3.521a65.21,65.21,0,0,0,92.3,0q1.708-1.708,3.275-3.521c.248-.287.492-.578.735-.869a64.85,64.85,0,0,0,6.034-8.543c.138-.233.277-.464.412-.7a65.046,65.046,0,0,0,8.661-32.517A66.017,66.017,0,0,0,1157.1,1383.531Z"
          transform="translate(-877.536 -987.52)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <text
          id="COIN-2"
          data-name="COIN"
          transform="translate(215 406.5)"
          fill="#fff"
          fontSize="12"
          fontFamily="SegoeUI, Segoe UI"
          letterSpacing="0.12em"
        >
          <tspan x="-16.322" y="0">
            COIN
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
  margin: -86px 4px -51px 4px;
  z-index: 9999;
  
  @media screen and (max-width: 1350px) {
    margin: -24px -9px -23px -9px;
`;
