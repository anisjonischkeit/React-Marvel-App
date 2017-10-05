import type { ActionsType } from 'types/redux'
import { 
	SET_DATA, 
	ADD_DATA, 
	SET_DATA_LOADING_STATUS,
	SELECT_DATA_ITEM
} from 'actions/data/characterActions'

type DataType = {
	obj: ?Array<any>,
	order: ?Array<string>,
	loading: boolean,
	selectedId: ?number
}

export type StateType = {
	characters: ?DataType,
	comics: ?DataType,
	creators: ?DataType,
	events: ?DataType,
	series: ?DataType,
	stories: ?DataType,
}

const initialDataObj = {
	obj: null,
	order: null,
	loading: false,
	selectedId: null
}

const initialState = {
	characters: {...initialDataObj},
	comics: {...initialDataObj},
	creators: {...initialDataObj},
	events: {...initialDataObj},
	series: {...initialDataObj},
	stories: {...initialDataObj},
}

export default (state: StateType = initialState, action : ActionsType) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				[action.dataName]: {
					obj: action.characterObj,
					order: action.characterOrder
				}
			}
		case ADD_DATA:
			return {
				...state,
				[action.dataName]: {
					...state[action.dataName],
					obj: {...state[action.dataName].obj, ...action.characterObj},
					order: [...state[action.dataName].order, ...action.characterOrder]
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
					selectedId: action.characterId
				}
			}
		default:
			return state
	}
}