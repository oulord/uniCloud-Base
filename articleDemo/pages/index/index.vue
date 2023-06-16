<template>
	<view class="home">
		<view class="content">
			<view class="item" v-for="item in listArr" :key="item._id">
				<view class="text">
					<view class="title">{{item.title}}</view>
					<view class="info">
						<text>{{item.author}}</text>
						<text>{{item.posttime}}</text>
						<text>删除</text>
					</view>
				</view>
				<view class="pic">
					<image mode="aspectFill" src="../../static/images/nopic.jpg"></image>
				</view>
			</view>
		</view>

		<view class="goAdd" @click="goAdd">+</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			// 点击跳转数据库的列表
			getData() {
				uniCloud.callFunction({
					name: "art_get_all"
				}).then(res => {
					// console.log(res);
					this.listArr = res.result.data
				})
			},

			// 点击跳转到新增页面
			goAdd() {
				uni.navigateTo({
					url: "/pages/add/add"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.content {
			padding: 30rpx;

			.item {
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				border-bottom: 1rpx solid #eee;

				.text {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-size: 44rpx;
						color: #333;
						text-align: justify;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						padding-right: 20rpx;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					.info {
						font-size: 28rpx;
						color: #888;

						text {
							padding-right: 10rpx;
						}
					}
				}

				.pic {
					width: 260rpx;
					height: 180rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.goAdd {
			width: 100rpx;
			height: 100rpx;
			background: #2b9939;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			font-size: 50rpx;
			position: fixed;
			right: 60rpx;
			bottom: 100rpx;
		}
	}
</style>