const App = getApp()

Page({
	data: {},
	onLoad() {
		this.$wuxToast = App.wux(this).$wuxToast
	},
	showToast() {
		const _this =this;
		_this.$wuxToast.show({
			type: 'success',
			timer: 1500,
			color: '#fff',
			text: '已完成',
			// 成功之后的返回,想当于下面的success
			success: () => console.log('已完成')
			// success: function(){
			// 	console.log('已完成')
			// }
		})
	},
	showToastCancel() {
		const _this =this;
		_this.$wuxToast.show({
			type: 'cancel',
			timer: 1500,
			color: '#fff',
			text: '取消操作',
			success: () => console.log('取消操作')
		})
	},
	showToastErr() {
		const _this =this;
		_this.$wuxToast.show({
			type: 'forbidden',
			timer: 1500,
			color: '#fff',
			text: '禁止操作',
			success: () => console.log('禁止操作')
		})
	},
	showToastText() {
		const _this =this;
		_this.$wuxToast.show({
			type: 'text',
			timer: 1500,
			color: '#fff',
			text: '文本内容',
			success: () => console.log('文本内容')
		})
	},
})