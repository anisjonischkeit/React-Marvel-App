import type { ActionsType } from 'types/redux'
import { 
	GET_CHARACTERS, 
	SET_CHARACTER_LOADING_STATUS
} from 'actions/data/characterActions'

export type StateType = {
	list: ?Array<any>,
	loading: boolean
}

const initialState = {
	list: null
}

export default (state: StateType = initialState, action : ActionsType) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				...state,
				list: action.characterList
			}
		case SET_CHARACTER_LOADING_STATUS:
			return {
				...state,
				loading: action.loading
			}
		default:
			return state
	}
}