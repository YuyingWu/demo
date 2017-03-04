<template>
  <section class="page page-lab">
  	<h1>伍酱的实验室</h1>

  	<div class="clearfix">
  		<figure class="lab-item" v-for="item in list">
  			<a :href="item.link" target="_blank">
  				<img :src="item.screenshot"/>
  				<span>{{ item.title }}</span>
          <span v-if="item.github">
            <a :href="item.github"
              target="_blank">
              <i class="icon iconfont icon-github"></i>
              传送门
            </a>
          </span>
          <span v-else>&nbsp;</span>
        </a>
  		</figure>
  	</div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            link: 'http://www.wuyuying.com/whv/#/personal-details',
            screenshot: 'http://cdn.sinacloud.net/demo-static/img/lab/whv.png',
            title: 'WHV申请表',
            github: 'https://github.com/YuyingWu/whv',
          },
          {
            link: 'http://www.wuyuying.com/demo/#/qrcode',
            screenshot: 'http://cdn.sinacloud.net/demo-static/img/lab/qrcode.png',
            title: '二维码生成器',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="less">
@import "../../assets/css/variable.less";
.page-lab{
	@itemSize: 200px;
	@itemGutter: 1em;
	h1{
		text-align: center;
		margin: 0.5em 0;
	}
	.lab-item{
		text-align: center;
		padding: @itemGutter;
		border-radius: @border-radius;
		border: 1px solid @base-color;
		box-shadow: inset 0 1px 1px @base-darker-color;
		width: @itemSize;
		float: left;
		margin-right: 45px;
		margin-top: @itemGutter;
		&:nth-child(3n){
			margin-right: 0;
		}
		&:hover{
			border: 1px solid @highlight-color;
		}
		a,
		span,
		img{
			width: @itemSize;
			display: block;
		}
		img{
			height: @itemSize;
      background-color: @base-darker-color;
		}
    a,
		span{
			margin-top: 10px;
			color: @highlight-color;
		}
	}
	@media screen and (max-width: @mobile-breakpoint){
		.lab-item{
			display: block;
			margin: @itemGutter auto 0;
			float: none;
			&:nth-child(3n){
				margin-right: auto;
			}
		}
	}
}
</style>
