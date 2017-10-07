import React from 'react';

import ItemList from 'components/mainList/ItemList';
import type { PropsType } from 'components/mainList/ItemList';
import './FixedWidthItemList.css'

import TextField from 'material-ui/TextField';



export default class FixedWidthItemList extends React.Component{
	constructor(props) {
		super(props)
		this.onSearchChange = e => {
			// Thank you closures!!!
			const value = e.currentTarget.value;
			props.onSearchChange(value);
		}
		this.handleSearchKeyPress = e => {
			const key = e.keyCode
			if (key === 13) {
				console.log(13)
				props.executeSearch()
			}
		}
	}

	render() {
		return (
			<div className='fixedWidthItemListWrapper'>
				<TextField
					floatingLabelText={`Search ${this.props.listName}`}
					fullWidth
					onChange={this.onSearchChange}
					onKeyDown={this.handleSearchKeyPress}
				/>
				<div className="fixedWidthItemList" width={this.props.width}>
					<ItemList {...this.props} />
				</div>
			</div>
		)
	}
} 