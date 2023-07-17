import { css } from "@emotion/react";

import { fonts } from "./typography";

export const reset = css`
  // @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  *::before,
  *::after {
    display: block;
  }

  img,
  picture,
  video,
  iframe,
  figure {
    max-width: 100%;
    width: 100%;
    display: block;
    // object-fit: cover;
    // object-position: center center;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a,
  strong,
  blockquote,
  i,
  b,
  u,
  em {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  p a {
    display: inline;
  }

  li {
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  table,
  tr,
  td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  form,
  input,
  textarea,
  select,
  button,
  label {
    font-family: inherit;
    font-size: inherit;
    hyphens: auto;
    background-color: transparent;
    color: inherit;
    display: block;
    appearance: none;
  }

  svg {
    width: 100%;
    max-height: 100%;
    display: block;
    // fill: currentColor;
  }
`;

export const global = css`
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-size: 100%;
    line-height: 1.5;
    font-family: ${fonts.primary};

    // hyphens: auto;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
