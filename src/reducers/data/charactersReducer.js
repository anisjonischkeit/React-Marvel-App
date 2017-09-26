import type { ActionsType } from 'types/redux'
import { GET_CHARACTERS } from 'actions/data/characterActions'

export type StateType = {
	list: ?Array<any>
}

const initialState = {
	list: null
}

export default (state: StateType = initialState, action : ActionsType) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				...state,
				list: action.list
			}
		default:
			return state
	}
}