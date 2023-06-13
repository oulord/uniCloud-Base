'use strict';
// 连接数据库
const db = uniCloud.database()
exports.main = async (event, context) => {
	// 连接对应的表
	// let res = await db.collection("users").get()
	// let res = await db.collection("users").count()
	// let res = await db.collection("users").add({})  .add([{},{},....])
	let {name,tel} = event
	let res = await db.collection("users").add({
		name,
		tel
	})
	return res
};