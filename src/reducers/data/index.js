import type { ActionsType } from 'types/redux'
import { 
	SET_DATA, 
	ADD_DATA, 
	SET_DATA_LOADING_STATUS,
	SELECT_DATA_ITEM,
	SET_DATA_SEARCH_FIELD,
	SET_DATA_FIRST_ITEM
} from 'actions/data/'

type DataType = {
	obj: ?Array<any>,
	order: ?Array<string>,
	loading: boolean,
	selectedId: ?number,
	searchField: ?string,
	firstItem: ?any
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
	params: {}
}

const initialState = {
	characters: {...initialDataObj},
	comics: {...initialDataObj},
	creators: {...initialDataObj},
	events: {...initialDataObj},
	series: {...initialDataObj},
}

export default (state: StateType = initialState, action : ActionsType) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				[action.dataName]: {
					...state[action.dataName],
					obj: action.dataObj,
					order: action.dataOrder
				}
			}
		case ADD_DATA:
		return {
			...state,
			[action.dataName]: {
				...state[action.dataName],
				obj: {...state[action.dataName].obj, ...action.dataObj},
				order: [...state[action.dataName].order, ...action.dataOrder]
			}
		}
		case SET_DATA_SEARCH_FIELD:
			return {
				...state,
				[action.dataName]: {
					...state[action.dataName],
					params: action.params
				}
			}
		case SET_DATA_LOADING_STATUS:
			return {
				...state,
				[action.dataName]: {
					...state[action.dataName],
					loading: action.loading
				}
			}
		case SELECT_DATA_ITEM:
			return {
				...state,
				[action.dataName]: {
					...state[action.dataName],
					selectedId: action.dataId
				}
			}
		case SET_DATA_FIRST_ITEM:
			return {
				...state,
				[action.dataName]: {
					...state[action.dataName],
					firstItem: action.item
				}
			}
		default:
			return state
	}
}