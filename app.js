
import wux from 'components/wux'

App({
	onLaunch() {
		console.log('onLaunch')
	},
	onShow() {
		console.log('onShow')
	},
	onHide() {
		console.log('onHide')
	},
	// 通过scope来引入wux函数
	wux: (scope) => new wux(scope)
})