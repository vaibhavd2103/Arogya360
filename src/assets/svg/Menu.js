import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu(props) {
  return (
    <Svg
      fill="#1A1A1A"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      width="64px"
      height="64px"
      {...props}>
      <Path d="M56 48a4 4 0 010 8H16a4 4 0 010-8h40zm0-16a4 4 0 010 8H16a4 4 0 010-8h40zm0-16a4 4 0 010 8H16a4 4 0 010-8h40z" />
    </Svg>
  );
}

export default Menu;
