export default `
/*
 * "Myself" v1.0.5
 * Robot rights protected under BOT License
 * Authored by pen#PwLXXP
 */

body {
  background-color: #1a1c24; color: #fff;
  font-size: 13px; line-height: 1.4;
  -webkit-font-smoothing: subpixel-antialiased;
}

/* ...
 *
 * ...hello?
 *
 * Oh hai guys! It's me, pen#PwLXXP.
 *
 * I'm just sitting here coding away.
 *
 * Sure, you can watch.
 *
 *
 * This CSS is being injected into a DOM style element
 * and written in this pre element simultaneously.
 *
 * Confused? Watch!
 *
 */

pre {
  position: fixed; width: 48%;
  top: 30px; bottom: 30px; left: 26%;
  transition: left 500ms;
  overflow: auto;
  background-color: #313744; color: #a6c3d4;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}


/*
 * Syntax highlighting
 * Colors based on Base16 Ocean Dark
 */

pre em:not(.comment) { font-style: normal; }

.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }
`;
