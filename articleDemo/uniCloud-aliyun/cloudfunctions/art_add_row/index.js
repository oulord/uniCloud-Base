'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {
		detail,
		picurls
	} = event
	return await db.collection("article").add({
		posttime: Date.now(),
		...detail,
		picurls
	})
};