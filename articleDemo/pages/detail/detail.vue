<template>
	<view class="detail">
		<view class="title">这是标题</view>
		<view class="info">
			<text>作者</text>
			<text>2022-10-01 15:12:12</text>
		</view>
		<view class="content">这是内容</view>

		<view class="btnGroup">
			<button size="mini">修改</button>
			<button size="mini" type="warn">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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