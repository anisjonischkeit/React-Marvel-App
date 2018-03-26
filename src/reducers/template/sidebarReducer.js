import type { ActionsType } from '../../types/redux'
import { CHANGE_SIDEBAR_OPEN_STATE } from '../../actions/template/sidebarActions'

export type StateType = {
	open: boolean
}

const initialState = {
	open: false
}

export default (state: StateType = initialState, action : ActionsType) => {
	switch (action.type) {
		case CHANGE_SIDEBAR_OPEN_STATE:
			return {
				...state,
				open: action.open
			}
		default:
			return state
	}
}