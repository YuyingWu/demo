
var React = require('react');

var Style = `
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
`

/*let openComment = false;
let writeStyleChar = (which) => {
	if(which == '/' && openComment == false){
		openComment = true;
	}
}*/

var Resume = React.createClass({
	getInitialState: function(){
		return {
			html: Style,
			styleText: '',
			inlineStyle: '',
			openComment: false
		}
	},
	writeStyleChar: function(which){
		var me = this;
		var openComment = me.state.openComment;
		var styleText = me.state.styleText;

		if(which == '/' && openComment == false){
			openComment = true;
			styleText += which;
		}else if(which == '/' && openComment == true){
			styleText = styleText.replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
		}else if(which == ':'){
			styleText = styleText.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
		}else if(which == ';'){
			styleText = styleText.replace(/([^:]*)$/, '<em class="value">$1</em>;');
		}else if(which == '{'){
			styleText = styleText.replace(/(.*)$/, '<em class="selector">$1</em>{');
		}
		else{
			styleText += which;
		}

		me.setState({
			styleText: styleText,
			inlineStyle: me.state.inlineStyle + which
		});
	},
	writeStyles: function(message, index){
		var me = this;
		var pre = document.getElementById('content');
		var interval = (window.innerWidth <= 578) ? 4 : 16;

		if(index < message.length){
			pre.scrollTop = pre.scrollHeight;
			me.writeStyleChar(message[index++]);
			setTimeout(function(){
				me.writeStyles(message, index, interval);
			}, interval);
		}
	},
	render: function () {
		return (
			<section>
				<section>
					<style dangerouslySetInnerHTML={{ __html: this.state.inlineStyle }}></style>
					<pre id="content" dangerouslySetInnerHTML={{ __html: this.state.styleText }}></pre>
				</section>
			</section>
		)
	},
	componentDidMount: function(){
		this.writeStyles(this.state.html, 0);
	}
})

module.exports = Resume
