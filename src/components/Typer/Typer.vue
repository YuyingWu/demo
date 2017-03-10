<template>
  <section>
    <pre ref="contentElement" v-html="output" class="content"></pre>
    <pre ref="styleElement" v-html="styleOutput" class="styles"></pre>
  </section>
</template>

<script>
/*eslint-disable */
import content from './content.js';
import styleContent from './styles.js';

export default {
  data() {
    return {
      openComment: false,
      output: '',
      styleOutput: '',
      styleTag: null
    }
  },
  methods: {
    writeStyleChar: function(which, options){
  		var openComment = this.openComment;
      var options = Object.assign({
        isCSS: false,
        isText: true,
        model: ''
      }, options);

      var output = this[options.model] || '';

  		if(which == '/' && openComment == false){
  			openComment = true;
  			output += which;
  		}else if(which == '/' && openComment == true){
  			output = output.replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
  		}else if(which == ':'){
  			output = output.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
  		}else if(which == ';'){
  			output = output.replace(/([^:]*)$/, '<em class="value">$1</em>;');
  		}else if(which == '{'){
  			output = output.replace(/(.*)$/, '<em class="selector">$1</em>{');
  		}
  		else{
  			output += which;
  		}

      if(options.isText){
        this[options.model] = output;
      }

      if(options.isCSS && this.styleTag){
        this.styleTag.innerHTML += which;
      }
  	},
  	writeStyles: function(message, index, element, options){
  		var me = this;
  		var interval = (window.innerWidth <= 578) ? 4 : 16;

  		if(index < message.length){
  			element.scrollTop = element.scrollHeight;
  			me.writeStyleChar(message[index++], options);
  			setTimeout(function(){
  				me.writeStyles(message, index, element, options);
  			}, interval);
  		}
  	},
  },
  mounted() {
    // 动态创建并插入style标签到body下
    this.styleTag = document.createElement('style')
    this.styleTag.setAttribute('id', 'typer-styles');
    document.getElementById('body').appendChild(this.styleTag);

    // 内容
    this.writeStyles(content, 0, this.$refs.contentElement, {
      isCSS: false,
      isText: true,
      model: 'output'
    });

    // 样式
    this.writeStyles(styleContent, 0, this.$refs.styleElement, {
      isCSS: true,
      isText: true,
      model: 'styleOutput'
    });
  }
}
/*eslint-enable */
</script>

<style lang="less">
.styles{
  opacity: 0;
  transition: opacity 2s;
}
/*
 * Syntax highlighting
 * Colors loosely based on Monokai Phoenix
 */
.comment       { color: #75715e; }
.selector      { color: #a6da27; }
.key           { color: #64d9ef; }
.value         { color: #fefefe; }
</style>
