import * as React from 'react';
import MenuItem from 'components/template/SideBarMenuItem';
import { setSidebarOpenState } from 'actions/template/sidebarActions'
import store from 'store';
import { withRouter } from 'react-router-dom'

const onClickHandler = (link: string, history) => {
	console.log(`closing sidebar and going to ${link}`)
	store.dispatch(setSidebarOpenState(false))
	history.push(link)
}
 
type PropsType = {
	text: string,
	leftIcon: React.Element,
	link: string
}

export default withRouter(({ text, leftIcon, link, history }: PropsType) => (
	<MenuItem
		text={text}
		leftIcon={leftIcon}
		onClick={() => onClickHandler(link, history)}
	/>
))