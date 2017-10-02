import type { ActionsType } from 'types/redux'
import { 
	GET_CHARACTERS, 
	SET_CHARACTER_LOADING_STATUS,
	SELECT_CHARACTER
} from 'actions/data/characterActions'

export type StateType = {
	obj: ?Array<any>,
	order: ?Array<string>,
	loading: boolean,
	selectedId: ?number
}

const initialState = {
	obj: null,
	order: null,
	loading: false,
	selectedId: null
}

export default (state: StateType = initialState, action : ActionsType) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				...state,
				obj: action.characterObj,
				order: action.characterOrder
			}
		case SET_CHARACTER_LOADING_STATUS:
			return {
				...state,
				loading: action.loading
			}
		case SELECT_CHARACTER:
			return {
				...state,
				selectedId: action.characterId
			}
		default:
			return state
	}
}