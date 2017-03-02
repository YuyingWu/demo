<template>
    <nav class="wgt-header">
        <header class="summary"
    		v-if="deviceClass == 'mobile'"
    		@click="toggleShowValue">
    		<i class="icon iconfont icon-caidan"></i>
    	</header>

    	<section class="details"
    		:class="{'show': !isShow}">
    		<template v-for="item in list">
        		<router-link
        			:to="item.path"
        			exact
        			@click.native="toggleShowValue">
        			{{ item.title }}
        		</router-link>
        	</template>

        	<a href="http://wuyuying.com?fr=demo" target="_blank">Blog</a>
    	</section>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        path: '/',
        title: 'Me',
      }, {
        path: '/resume',
        title: 'Resume',
      }, {
        path: '/lab',
        title: 'Lab',
      }],
      isShow: true,
      deviceClass: 'desktop',
    };
  },
  methods: {
    toggleShowValue() {
      this.isShow = !this.isShow;
    },
  },
  created() {
    const windowWidth = document.body.clientWidth;
    const mobileBreakpoint = 479;

    this.deviceClass = windowWidth > mobileBreakpoint ? 'desktop' : 'mobile';
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../../assets/css/variable.less";
.wgt-header{
	background: @highlight-color;
	a{
		font-size: 1.4em;
		margin-right: 1.5em;
		font-weight: 700;
		padding: 0.5em 0;
		display: inline-block;
		width: 100px;
		text-align: center;
		color: #fff;
		&:hover, &.router-link-active{
			background: @highlight-darker-color;
			border-radius: @border-radius;
		}
	}
	.details{
		padding: 1em;
	}
	@media screen and (max-width: @mobile-breakpoint){
		.summary{
			display: block;
			color: #fff;
			padding: 1.6em 2em;
			text-align: right;
		}
		.details{
			display: none;
			&.show{
				display: block;
			}
		}
		a{
			width: auto;
			margin: 0.5em 0;
			display: block;
		}
	}
}
</style>
