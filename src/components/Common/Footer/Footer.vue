<template>
<footer class="wgt-footer">
	<p>&copy; {{ year }} 伍酱
		<template v-for="(value, key) in list">
			<span>|</span>
			<a :href="value.url" target="_blank">{{ value.cn }}</a>
		</template>
	</p>
</footer>
</template>

<script>
  import SocialData from '@/js/SocialData';

  export default {
    data() {
      return {
        year: (new Date()).getFullYear(),
        list: SocialData,
      };
    },
  };
</script>

<style scoped lang="less">
@import "../../../assets/css/variable.less";
.wgt-footer{
	width: 100%;
	text-align: center;
	color: @base-darker-color;
	margin: 2em 0;
	font-size: @base-font-size;
	a{
		color: @base-darker-color;
		padding: 0 0.2em;
	}
}
</style>
