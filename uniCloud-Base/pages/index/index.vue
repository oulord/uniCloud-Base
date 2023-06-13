<template>
	<view class="home">
		<!-- <view class="row" v-for="item in listArr" :key="item.id">
			<image :src="item.picurl" mode=""></image>
			<view>{{item.title}}</view>
		</view> -->

		<form @submit="onSubmit">
			<input type="text" name="name">
			<input type="text" name="tel">
			<button form-type="submit">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hello",
				listArr: []
			}
		},
		onLoad() {
			
		},
		methods: {
			onSubmit(e){
				console.log(e);
				let obj = e.detail.value
				this.pushCloud(obj)
			},
			pushCloud(obj){
				uniCloud.callFunction({
					name:"cloudDemo1",
					data:obj
				}).then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss">
	.row {
		border-bottom: 1px solid #ccc;
		padding: 30rpx;
	}
</style>