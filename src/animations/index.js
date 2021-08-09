import { keyframes } from 'styled-components';

export const fadeFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-10%) }
  to { opacity: 1; transform: translateX(0) }
`;

export const fadeInFromBottom = keyframes`
  from { opacity: 0; transform: translateY(20%); }
  to { opacity: 1; transform: translateY(0); }
`;

export const appearFromTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

export const opacityTo100 = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const growFromLeft = (width = '248px') => keyframes`
  from { width: 0px }
  to { width: ${width} }
`;

export const breathe = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(0.95);
}
100% {
  transform: scale(1);
}
`;

export const explote = keyframes`
 to { transform: scale(10); opacity: 0; }
`;

export const breatheOpacity = keyframes`
  from { opacity: .7 }
  to { opacity: .3 }
`;
