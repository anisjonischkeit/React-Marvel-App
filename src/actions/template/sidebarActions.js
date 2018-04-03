export const CHANGE_SIDEBAR_OPEN_STATE = 'CHANGE_SIDEBAR_OPEN_STATE';

export const setSidebarOpenState = (open: boolean) => ({
  type: CHANGE_SIDEBAR_OPEN_STATE,
  open
})

export const openSideBar = () => setSidebarOpenState(true)
export const closeSideBar = () => setSidebarOpenState(false)
