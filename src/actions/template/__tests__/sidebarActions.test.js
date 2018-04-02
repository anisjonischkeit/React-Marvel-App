import * as actions from '../sidebarActions'

describe("sidebarActions", () => {
	it('should create an action that sets the state of the sidebar', () => {
		const expectedAction = {
			type: actions.CHANGE_SIDEBAR_OPEN_STATE,
			open: false,
		}
		
		const actualAction = actions.setSidebarOpenState(false)
	
		expect(actualAction).toEqual(expectedAction)
	
		const expectedAction2 = {
			type: actions.CHANGE_SIDEBAR_OPEN_STATE,
			open: true,
		}
		
		const actualAction2 = actions.setSidebarOpenState(true)
	
		expect(actualAction2).toEqual(expectedAction2)
	})
	
	it('should create an action that opens the sidebar', () => {
		const expectedAction = {
			type: actions.CHANGE_SIDEBAR_OPEN_STATE,
			open: true,
		}
		
		const actualAction = actions.openSideBar()
	
		expect(actualAction).toEqual(expectedAction)
	})
	
	it('should create an action that closes the sidebar', () => {
		const expectedAction = {
			type: actions.CHANGE_SIDEBAR_OPEN_STATE,
			open: false,
		}
		
		const actualAction = actions.closeSideBar()
	
		expect(actualAction).toEqual(expectedAction)
	})

})