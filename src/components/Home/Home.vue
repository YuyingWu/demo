<template>
  <section class="page page-home">
  	<div class="avatar">
  		<img src="http://cdn.sinacloud.net/demo-static/img/avatar.JPG" />
  	</div>

  	<h1>Hi，I'm 伍酱.</h1>

    <c-social></c-social>
  </section>
</template>

<script>
  import Social from '@/components/Common/Social/Social';

  export default {
    components: {
      'c-social': Social,
    },
  };
</script>

<style scoped lang="less">
.page-home{
	margin: 4em auto;
	text-align: center;
	h1{
		text-align: center;
		margin-top: 1em;
	}
	.avatar{
		margin: 0 auto;
		width: 223px;
		img{
			display: inline-block;
			width: 223px;
			height: 223px;
			border-radius: 100%;
		}
	}
}
</style>
