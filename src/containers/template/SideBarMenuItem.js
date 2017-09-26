import * as React from 'react';
import MenuItem from 'components/template/SideBarMenuItem';
import { setSidebarOpenState } from 'actions/template/sidebarActions'
import store from 'store';

const onClickHandler = (link: string) => {
	console.log(`closing sidebar and going to ${link}`)
	store.dispatch(setSidebarOpenState(false))
}
 
type PropsType = {
	text: string,
	leftIcon: React.Element,
	link: string
}

export default ({ text, leftIcon, link }: PropsType) => (
	<MenuItem
		text={text}
		leftIcon={leftIcon}
		onClick={() => onClickHandler(link)}
	/>
)