import reducer, { initialState } from '../sidebarReducer'
import * as actions from "../../../actions/template/sidebarActions"

describe('Sidebar reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  
  it(`should handle CHANGE_SIDEBAR_OPEN_STATE going to open`, () => {
    const newState = reducer(initialState, {
      type: actions.CHANGE_SIDEBAR_OPEN_STATE,
      open: true,
    })

    const expectedState = {
      open: true,
    }
    
    expect(newState).toEqual(expectedState)
  })
  
  it(`should handle CHANGE_SIDEBAR_OPEN_STATE going to closed`, () => {
    const newState = reducer(initialState, {
      type: actions.CHANGE_SIDEBAR_OPEN_STATE,
      open: false,
    })

    const expectedState = {
      open: false,
    }
    
    expect(newState).toEqual(expectedState)
  })
  
  it(`should handle CHANGE_SIDEBAR_OPEN_STATE with an invalid action`, () => {
    const newState = reducer(initialState, {
      type: "SOME_INVALID_ACTION",
      open: true,
    })
    
    expect(newState).toEqual(initialState)

    const newState2 = reducer(initialState, {
      type: "SOME_INVALID_ACTION",
      open: false,
    })
    
    expect(newState2).toEqual(initialState)
  })
})