'use strict';
const db = uniCloud.datebase()
exports.main = async (event, context) => {
	let {
		detail,
		picurls
	} = event
	return await db.collection("article").doc(detail._id).updata({
		title: detail.title,
		author: detail.author,
		content: detail.content,
		picurls:picurls
	})
};