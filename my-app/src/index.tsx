import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import App from './components/App';

import reset from 'reset-css';

ReactDOM.render(
  <>
    <Global
      styles={css`
        ${reset}
        /* 추가적인 전역 스타일 작성 */
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f0f0;
        }
      `}
    />
    <App />
  </>,
  document.getElementById('root')
);
