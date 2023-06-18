<template>
	<view class="detail">
		<view v-if="loadState">
			<view class="title">{{detail.title}}</view>
			<view class="info">
				<text>{{detail.author}}</text>
				<text><uni-dateformat :date="detail.posttime"></uni-dateformat></text>
			</view>
			<view class="content">{{detail.content}}</view>

			<view class="btnGroup">
				<button size="mini">修改</button>
				<button size="mini" type="warn" @click="onRemove">删除</button>
			</view>
		</view>

		<view v-else>
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script>
	let id
	export default {
		data() {
			return {
				detail: {},
				loadState: false
			};
		},

		onLoad(e) {
			id = e.id
			this.getDetail()
		},

		methods: {
			// 删除一条记录
			onRemove() {
				uni.showModal({
					content: "是否确认删除？",
					success: res => {
						if (res.confirm) {
							this.removeFun()
						}
					}
				})

			},

			removeFun() {
				uniCloud.callFunction({
					name: "art_remove_row",
					data: {
						id
					}
				}).then(res => {
					uni.showToast({
						title: "删除成功"
					})
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}, 800)
				})
			},

			// 获取详情页
			getDetail() {
				uniCloud.callFunction({
					name: "art_get_row",
					data: {
						id
					}
				}).then(res => {
					this.detail = res.result.data[0]
					this.loadState = true
					uni.setNavigationBarTitle({
						title: this.detail.title
					});
				}).catch(() => {
					uni.showToast({
						icon: "error",
						title: "删除有误"
					})
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}, 800)
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 50rpx;
			color: #000;
			text-align: justify;
			line-height: 1.4em;
		}

		.info {
			font-size: 30rpx;
			color: #666;
			padding: 30rpx 0 60rpx;

			text {
				padding-right: 30rpx;
			}
		}

		.content {
			font-size: 36rpx;
			line-height: 1.4em;
		}

		.btnGroup {
			padding: 50rpx 0;

			button {
				margin-right: 50rpx;
			}
		}
	}
</style>