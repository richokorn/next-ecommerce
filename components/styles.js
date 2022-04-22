import { css } from '@emotion/react';

// Remember the golden rule: Pos -> Box -> Aes
// Pos: Positioning and display.
// Box: Box Model and how it is sized/padded/margined.
// Aes: Aesthetics and how it looks, Stuff inside.
export const xWrapper = css`
  display: flex;
  flex-direction: row;
`;

export const yWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const headerWrapper = css`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px 0px;
  margin: 0;
  width: 100%;
  height: min-content;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: rgb(255, 255, 255);
`;

export const heroDividerWrapper = css`
  position: relative;
  margin-top: 20vh;
  margin-left: auto 0;
  margin-right: auto 0;

  display: flex;
  justify-self: center;

  max-width: 1310px;
`;

export const heroDividerContentColumn = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: middle;
  position: relative;
  max-width: 30vw;
  margin-right: 2em;

  img {
    width: 20vw;
  }
`;
export const h1Intro = css`
  h1 {
    font-size: 48px;
  }
`;
export const pIntro = css`
  margin-top: 10vh;
  p {
    font-size: 24px;
  }
`;

export const mainStyle = css`
  margin-top: 5em;
  margin-left: 20vw;
  margin-right: 20vw;
  max-width: 1310px;
`;

export const headerLeft = css`
  position: absolute;
  display: flex;
  left: 0;
  margin-left: 15vw;

  height: 2em;
  align-items: center;

  img {
    max-height: 3.5em;
  }

  a {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }

  p {
    font-size: 24px;
  }
`;

export const headerRight = css`
  position: absolute;
  right: 0;
  display: flex;
  height: 2em;
  margin-right: 15vw;
  align-items: center;

  a {
    font-size: 21px;
    margin-right: 24px;
    font-size: 21px;
    color: rgb(229, 23, 107);
  }

  a:hover {
    text-decoration: underline rgb(229, 23, 107);
  }

  img {
    max-height: 3em;
  }

  .cartCount {
    /* pos */
    position: relative;
    right: 0;
    align-self: center;

    /* box */
    display: flex;
    justify-content: center;
    align-content: center;
    width: 2em;

    /* aes */
    background: rgb(229, 23, 107);
    color: white;
    font-weight: bold;
    border-radius: 23%;
  }

  a {
    display: flex;
  }
`;

export const productCard = css`
  display: flex;
  flex-flow: column;
  max-width: 300px;
  height: min-content;
  padding: 1em;
  margin: 0.5em;
  border: 1px solid #eaeaea;
  border-radius: 0.5em;
  transition: color 0.15s, border-color 0.15s;

  background-color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  text-align: left;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    color: #0020f3;
    border-color: #0020f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .description1 {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  .description2 {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.5;
  }
  .price {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  .rowWrapper {
    display: flex;
  }

  .cartButton {
    width: 50%;
  }
`;
