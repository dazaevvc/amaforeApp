import { injectGlobal } from 'styled-components';

import CardenioModernStd from './styles/fonts/Cardenio-Modern-Std.ttf';
import CardenioModernBold from './styles/fonts/Cardenio-Modern-Bold.ttf';
import SubnoseRegular from './styles/fonts/Subnose-Regular.otf';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'SubnoseRegular', sans-serif;
  }

  body.fontLoaded {
    font-family: 'SubnoseRegular', sans-serif;
    ;
  }

@font-face {
  font-family: Cardenio-Modern-Std;
  src: url('${CardenioModernStd}');
}

@font-face {
  font-family: Cardenio-Modern-Bold;
  src: url('${CardenioModernBold}');
}

@font-face {
  font-family: Subnose-Regular;
  src: url('${SubnoseRegular}');
}
`;
