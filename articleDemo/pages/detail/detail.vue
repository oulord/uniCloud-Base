<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<text>{{detail.author}}</text>
			<text><uni-dateformat :date="detail.posttime"></uni-dateformat></text>
		</view>
		<view class="content">{{detail.content}}</view>

		<view class="btnGroup">
			<button size="mini">修改</button>
			<button size="mini" type="warn">删除</button>
		</view>
	</view>
</template>

<script>
	let id
	export default {
		data() {
			return {
				detail:{}
			};
		},

		onLoad(e) {
			id = e.id
			this.getDetail()
		},

		methods: {
			getDetail() {
				uniCloud.callFunction({
					name: "art_get_row",
					data: {
						id
					}
				}).then(res => {
					this.detail = res.result.data[0]
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