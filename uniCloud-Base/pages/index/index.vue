<template>
	<view class="home">
		<view class="row" v-for="item in listArr" :key="item.id">
			<image :src="item.picurl" mode=""></image>
			<view>{{item.title}}</view>
		</view>
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
			uniCloud.callFunction({
				name: "myClounFun",
				data: {
					num:3
				}
			}).then((res) => {
				this.listArr = res.result
				console.log(this.listArr);
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.row {
		border-bottom: 1px solid #ccc;
		padding: 30rpx;
	}
</style>