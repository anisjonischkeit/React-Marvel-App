import { marvelApi } from '../settings';
import md5 from 'md5'

type QueryArgsType = {
	[key: string]: string
}

export default (url : string, queryArgs : QueryArgsType = {}) : Promise<object> => {
	let authStr = `?apikey=${marvelApi.publicKey}`

	if (marvelApi.privateKey) {
		const ts = Math.floor(Date.now());
		const hash = md5(ts + marvelApi.privateKey + marvelApi.publicKey)
		authStr += `&ts=${ts}&hash=${hash}`
	}

	let queryStr = ""
	Object.keys(queryArgs).forEach(key => {
		queryStr += `&${key}=${queryArgs[key]}`
	})

	return fetch(url + authStr + queryStr)
	.then(res => {
		if (res.ok) {
			return (
				res.json()
				.then(jsonRes => jsonRes.data)
			);
		} else {
			alert("something went wrong while fetching marvel data")
			throw Error('Failed to fetch')
		}
	})
} 