import type { ActionsType } from '../../types/redux'
import { 
	SET_DATA, 
	ADD_DATA, 
	SET_DATA_LOADING_STATUS,
	SELECT_DATA_ITEM,
	SET_DATA_SEARCH_FIELD,
	SET_DATA_FIRST_ITEM
} from '../../actions/data/'

type DataType = {
	obj: ?Array<any>,
	order: ?Array<string>,
	loading: boolean,
	selectedId: ?number,
	searchField: ?string,
	firstItem: ?any,
	outOfData: boolean,
}

export type StateType = {
	characters: ?DataType,
	comics: ?DataType,
	creators: ?DataType,
	events: ?DataType,
	series: ?DataType
}

const initialDataObj = {
	obj: null,
	order: null,
	loading: false,
	selectedId: null,
	firstItem: null,
	params: {},
	outOfData: false
}

const initialState = {
	characters: {...initialDataObj},
	comics: {...initialDataObj},
	creators: {...initialDataObj},
	events: {...initialDataObj},
	series: {...initialDataObj},
}

const createDataUpdater = (state, action) => update => ({
	...state,
	[action.dataName]: {
		...state[action.dataName],
		...update
	}
})

export default (state: StateType = initialState, action : ActionsType) => {
	const updateData = createDataUpdater(state, action)
	switch (action.type) {
		case SET_DATA:
			return updateData({
				obj: action.dataObj,
				order: action.dataOrder,
				outOfData: action.outOfData
			})
		case ADD_DATA:
			return updateData({
				obj: {...state[action.dataName].obj, ...action.dataObj},
				order: [...state[action.dataName].order, ...action.dataOrder],
				outOfData: action.outOfData
			})
		case SET_DATA_SEARCH_FIELD:
			return updateData({
				params: action.params
			})
		case SET_DATA_LOADING_STATUS:
			return updateData({
				loading: action.loading
			})
		case SELECT_DATA_ITEM:
			return updateData({
				selectedId: action.dataId
			})
		case SET_DATA_FIRST_ITEM:
			return updateData({
				firstItem: action.item
			})
		default:
			return state
	}
}