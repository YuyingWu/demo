<template>
  <section class="page page-lab">
  	<h1>伍酱的实验室</h1>

  	<div class="clearfix">
  		<figure class="lab-item" v-for="item in list">
  			<router-link :to="item.link">
  				<img :src="item.screenshot"/>
  				<span>{{ item.title }}</span>
  			</router-link>
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
            link: '/qrcode',
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
		}
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
