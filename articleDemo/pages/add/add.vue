<template>
	<view class="add">
		<form @submit="onSubmit">
			<view class="item">
				<input type="text" name="title" placeholder="请输入标题" />
			</view>

			<view class="item">
				<input type="text" name="author" placeholder="请输入作者" />
			</view>

			<view class="item">
				<textarea name="content" placeholder="请输入详细内容"></textarea>
			</view>

			<view class="item">
				<button form-type="reset">重置</button>
				<button form-type="submit" type="primary">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},

		methods: {
			// 点击提交表单
			onSubmit(e) {
				let detail = e.detail.value
				uniCloud.callFunction({
					name: "art_add_row",
					data: {
						detail: detail
					}
				}).then(res => {
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		padding: 30rpx;

		.item {
			padding-bottom: 20rpx;

			input,
			textarea {
				border: 1rpx solid #eee;
				height: 80rpx;
				padding: 0 20rpx;
			}

			textarea {
				height: 200rpx;
				width: 100%;
				box-sizing: border-box;
			}

			button {
				margin-bottom: 20rpx;
			}
		}
	}
</style>