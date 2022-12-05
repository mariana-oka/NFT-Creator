import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    background-color: #141416;


    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5,
h6, p, blockquote, pre, a, abbr, acronym, address, big,
cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small,
strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt,
dd, ol, ul, li, fieldset, form, label, legend, table, caption,
tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
embed, figure, figcaption, header, hgroup, menu, nav,
output, ruby, section, summary, time, mark, audio, video {
  /* margin: 0;
  padding: 0; */
  border: 0;
  vertical-align: baseline; }
  }

  html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; }

  img, fieldset, a img {
  border: none; }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    -webkit-appearance: none; }

  input, button {
  margin: 0;
  padding: 0;
  border: 0; }

  div, input, textarea, select, button,
  h1, h2, h3, h4, h5, h6, a, span, a:focus {
  outline: none; }

  html {
  box-sizing: border-box; }


h1,
h2,
h3,
h4 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700; 
}

p {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: #B1B5C3;
}

h1 {
  font-size: 64px;
  line-height: 1;
  letter-spacing: -.02em; }

h2 {
  font-size: 48px;
  line-height: 1.16667;
  letter-spacing: -.02em; }

  h3 {
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -.01em; }
  

  h4 {
  font-size: 32px;
  line-height: 1.25;
  letter-spacing: -.01em; }

  h5 {
    font-family: poppins, sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  h6 { 
    font-family: poppins, sans-serif;
    font-size: 12px;
    font-weight: 600;
  }

  label {
    font-family: poppins, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    color: #B1B5C3;
    text-transform: uppercase;
  }

  button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  background: #3772FF;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: #FCFCFD;
  transition: all .2s; 
  border-radius: 45px;
  
  &:hover {
    background: #044eff; 
  }

  &disabled {
    opacity: .5;
    pointer-events: none; }
}

a {
  color: white;
  font-family: 'DM Sans', sans-serif;
  text-decoration: none;
}

.button-stroke {
  background: none;
  box-shadow: 0 0 0 2px #E6E8EC inset;
  color: #23262F; }
  .button-stroke .icon {
  fill: #23262F;
  transition: fill .2s; }
  body.dark .button-stroke {
  box-shadow: 0 0 0 2px #353945 inset;
  color: #FCFCFD; }
  body.dark .button-stroke .icon {
    fill: #FCFCFD; }
  .button-stroke:hover {
  background: #3772FF;
  box-shadow: 0 0 0 2px #3772FF inset;
  color: #FCFCFD; }
  body.dark .button-stroke:hover {
    box-shadow: 0 0 0 2px #3772FF inset; }
  .button-stroke:hover .icon {
    fill: #FCFCFD; }

input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #353945;
  background: none;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.71429;
  font-weight: 500;
  color: #777E90;
}

body.dark .field__input, body.dark .field__textarea {
  border-color: #353945;
  color: #FCFCFD; }
  .field__input::-webkit-input-placeholder, .field__textarea::-webkit-input-placeholder {
  color: #777E90; }
  .field__input::-moz-placeholder, .field__textarea::-moz-placeholder {
  color: #777E90; }
  .field__input:-ms-input-placeholder, .field__textarea:-ms-input-placeholder {
  color: #777E90; }
  .field__input::-ms-input-placeholder, .field__textarea::-ms-input-placeholder {
  color: #777E90; }
  .field__input::placeholder, .field__textarea::placeholder {
  color: #777E90; }
  .field__input:focus, .field__textarea:focus {
  border-color: #777E90; }
  body.dark .field__input:focus, body.dark .field__textarea:focus {
    border-color: #777E90; }

.field__input {
  height: 48px;
  padding: 0 14px; }

.field__textarea {
  height: 96px;
  padding: 10px 14px;
  resize: none; }

`;
