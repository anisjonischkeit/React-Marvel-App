import * as React from 'react';
import MenuItem from '../../components/template/SideBarMenuItem';
import { closeSideBar } from '../../actions/template/sidebarActions'
import store from '../../store';
import { withRouter } from 'react-router-dom'

const onClickHandler = (link: string, history) => {
	store.dispatch(closeSideBar())
	history.push(link)
}

type PropsType = {
	text: string,
	leftIcon: React.Element,
	link: string
}

export default withRouter(({ text, leftIcon, link, location, history }: PropsType) => (
	<MenuItem
		text={text}
		leftIcon={leftIcon}
		active={link === location.pathname}
		onClick={() => onClickHandler(link, history)}
	/>
))
