<template>
	<view class="add">
		<form @submit="onSubmit">
			<view class="item">
				<input v-model="formValue.title" type="text" name="title" placeholder="请输入标题" />
			</view>

			<view class="item">
				<input v-model="formValue.author" type="text" name="author" placeholder="请输入作者" />
			</view>

			<view class="item">
				<textarea v-model="formValue.content" name="content" placeholder="请输入详细内容"></textarea>
			</view>

			<view class="item">
				<button form-type="reset">重置</button>
				<button form-type="submit" type="primary" :disabled="inDisabled(formValue)">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formValue: {
					title: "",
					author: "",
					content: "",
				}
			};
		},

		methods: {
			// 判断按钮是否禁用
			inDisabled(obj) {
				for (let key in obj) {
					if (!obj[key]) {
						return true
					}
				}
			},

			// 点击提交表单
			onSubmit(e) {
				let detail = e.detail.value
				uniCloud.callFunction({
					name: "art_add_row",
					data: {
						detail: detail
					}
				}).then(res => {
					// console.log(res);
					uni.showToast({
						title: "发布成功",
					})
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}, 1000)
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