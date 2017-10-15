import marvelFetch from 'utils/marvelFetch'


export const SET_DATA = 'SET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const SET_DATA_LOADING_STATUS = 'SET_DATA_LOADING_STATUS';
export const SELECT_DATA_ITEM = 'SELECT_DATA_ITEM';
export const SET_DATA_SEARCH_FIELD = 'SET_DATA_SEARCH_FIELD';
export const SET_DATA_FIRST_ITEM = 'SET_DATA_FIRST_ITEM';

export const getData = (dataName: string, characterObj: any, characterOrder: Array<string>) => ({
	type: SET_DATA,
	dataName,
	characterObj,
	characterOrder
})

export const addData = (dataName: string, characterObj: any, characterOrder: Array<string>) => ({
	type: ADD_DATA,
	dataName,
	characterObj,
	characterOrder
})

export const setDataRetrievalParams = (dataName: string, params: {[string]: string}) => ({
	type: SET_DATA_SEARCH_FIELD,
	dataName,
	params
})

export const setDataFirstItem = (dataName: string, item: object) => ({
	type: SET_DATA_FIRST_ITEM,
	dataName,
	item
})

export const selectDataItem = (dataName: string, characterId: ?number) => ({
	type: SELECT_DATA_ITEM,
	dataName,
	characterId
})

export const setDataLoadingStatus = (dataName: string, loading: boolean) => ({
	type: SET_DATA_LOADING_STATUS,
	dataName,
	loading
})

const fetchData = (dataName: string, actionCreator, params = {}) => async (dispatch, getState) => {
	const currCharacters = getState().data[dataName]
	
	if (!currCharacters.loading) {
		dispatch(setDataLoadingStatus(dataName, true))

		let characters = null
		try {
			characters = (await marvelFetch(`https://gateway.marvel.com:443/v1/public/${dataName}`, params)).results
		} catch(err) {
			// we are no longer loading so set this variable to false
			dispatch(setDataLoadingStatus(dataName, false))
			alert("something went wrong while fetching marvel data")
			return
		}
		
		let characterObj = {};
		let charOrder = [];

		characters.forEach(char => {
			characterObj[char.id] = char
			charOrder.push(char.id)
		})

		dispatch(actionCreator(dataName, characterObj, charOrder))
		dispatch(setDataLoadingStatus(dataName, false))
	}

}

export const fetchInitialData = (dataName: string) => (dispatch, getState) => {
	const params = getState().data[dataName].params
	dispatch(fetchData(dataName, getData, params));
}

export const fetchMoreData = (dataName: string) => (dispatch, getState) => {
	const currCharacters = getState().data[dataName]

	const params = {
		offset: (currCharacters.order || []).length,
		...currCharacters.params
	}

	dispatch(fetchData(dataName, addData, params))
}

export const fetchIndividualDataItem = (dataName: string, resourceURI: string) => async (dispatch, getState) => {
	let firstItemList = null
	try {
		firstItemList = (await marvelFetch(resourceURI)).results
	} catch(err) {
		// we are no longer loading so set this variable to false
		dispatch(setDataLoadingStatus(dataName, false))
		alert("something went wrong while fetching marvel data")
		return
	}
	if (firstItemList.length !== 1) {
		alert(`could not load resource at ${resourceURI}`)
		throw 'Could not load resource error'
	}

	dispatch(setDataFirstItem(dataName, firstItemList[0]))
	dispatch(selectDataItem(dataName, firstItemList[0].id))
}
