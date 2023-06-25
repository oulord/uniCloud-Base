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
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @success="uploadSuccess" />
			</view>

			<view class="item">
				<button form-type="reset">重置</button>
				<button form-type="submit" type="primary" :disabled="inDisabled(formValue)">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	let id
	export default {
		data() {
			return {
				imageValue: [],
				formValue: {
					title: "",
					author: "",
					content: "",
				},
				picurls:[]
			};
		},

		onLoad(e) {
			id = e.id
			this.getDetail()
		},

		onShow() {
			this.getDetail()
		},

		methods: {
			// 上传图片
			uploadSuccess(){
				this.picurls = e.tempFilePaths
			},
			
			// 获取详情
			getDetail() {
				uniCloud.callFunction({
					name: "art_get_row",
					data: {
						id
					}
				}).then(res => {
					this.formValue = res.result.data[0]
					let urls = this.formValue.picurls.map(item => {
						return {
							url: item
						}
					})
					this.imageValue = urls
				})
			},

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
				uniCloud.callFunction({
					name: "art_updata_row",
					data: {
						detail: this.formValue,
						picurls:this.picurls
					}
				}).then(res => {
					// console.log(res);
					uni.showToast({
						title: "修改成功",
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 800)
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