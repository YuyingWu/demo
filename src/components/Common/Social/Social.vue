<template>
  <footer class="wgt-social">
  	<ul class="clearfix">
  		<li v-for="(value, key) in list">
  			<a  :href="value.url"
  				target="_blank"
  				:class="'icon iconfont icon-' + key"
  				:title="key|toUpperCase"></a>
  		</li>
  	</ul>
  </footer>
</template>

<script>
  import SocialData from '@/js/SocialData';

  export default {
    data() {
      return {
        list: SocialData,
      };
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase();
      },
    },
  };
</script>

<style scoped lang="less">
@import "../../../assets/css/variable.less";
.wgt-social{
	margin-top: 4em;
	ul{
		padding-left: 0;
	}
	li{
		margin-right: 3em;
		display: inline;
		text-align: center;
		&:last-child{
			margin-right: 0;
		}
		a{
			font-size: @h3-font-size;
			color: @base-darker-color;
			&:hover{
				color: @else-color;
			}
		}
	}
}
</style>
