<template>
  <section>
    <pre ref="output" v-html="output"></pre>
  </section>
</template>

<script>
/*eslint-disable */
import content from './content.js';

export default {
  data() {
    return {
      openComment: false,
      output: '',
      styleTag: null
    }
  },
  methods: {
    writeStyleChar: function(which){
  		var openComment = this.openComment;
  		var output = this.output;

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

      this.output = output;

      if(this.styleTag){
        this.styleTag.innerHTML += which;
      }
  	},
  	writeStyles: function(message, index){
  		var me = this;
  		var pre = this.$refs.output;
  		var interval = (window.innerWidth <= 578) ? 4 : 16;

  		if(index < message.length){
  			pre.scrollTop = pre.scrollHeight;
  			me.writeStyleChar(message[index++]);
  			setTimeout(function(){
  				me.writeStyles(message, index, interval);
  			}, interval);
  		}
  	},
  },
  mounted() {
    // 动态创建并插入style标签到body下
    this.styleTag = document.createElement('style')
    this.styleTag.setAttribute('id', 'typer-styles');
    document.getElementById('body').appendChild(this.styleTag);

    // 开始写
    this.writeStyles(content, 0);
  }
}
/*eslint-enable */
</script>
