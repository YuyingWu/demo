export default `
body {
  font-size: 1em;
  background-color: #75715e;color: #fefefe;
  line-height: 1.4;margin: 0;
  -webkit-font-smoothing: subpixel-antialiased;
}
.styles{
  opacity: 0.1;
}
.content {
  transition: all 500ms;
  overflow: auto;
  position: fixed;
  top: 20px; bottom: 55px; left: 15%;
  width: 70%;
  background-color: #111111;
  color: #fefefe;
  margin: 0;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow:
    0px 0px 0px 1px rgba(255,255,255,0.2),
    0px 4px 0px 2px rgba(0,0,0,0.1);
}
/*
 * animation
 */
.content {
  transition: left 500ms, width 500ms, opacity 500ms;
  background-color: #111111; color: #fefefe;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow:
    0px 0px 0px 1px rgba(255,255,255,0.2),
    0px 4px 0px 2px rgba(0,0,0,0.1);
}
`;
