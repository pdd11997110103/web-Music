export default {
	// 设置用户信息
	setUserMsg(state, val) {
		state.userMsg = val
	},
	// 设置Cookie
	setCookie(state, val) {
		state.cookie = val
	},
	// 设置Token
	setToken(state, val) {
		state.token = val
	},
	// 设置歌曲信息
	setSongInfo(state, param) {
		state.songInfo = param
	},
	// 添加歌曲列表
	setSongList(state, param) {
		state.songList.push(param)
	}
}
