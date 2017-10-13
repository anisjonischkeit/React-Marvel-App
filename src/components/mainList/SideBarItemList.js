import React from 'react';

import ItemList from 'components/mainList/ItemList';
import type { PropsType } from 'components/mainList/ItemList';
import './FixedWidthItemList.css'
import Master from 'components/masterDetail/Master'

import TextField from 'material-ui/TextField';



export default class FixedWidthItemList extends React.Component {
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
				props.executeSearch()
			}
		}

		this.handleScroll = (e) => this.props.handleScroll(this.listElement);
	}

	render() {
		return (
			<Master className='masterView'>
				<div className='fixedWidthItemListWrapper' >
					<TextField
						floatingLabelText={`Search ${this.props.listName}`}
						fullWidth
						onChange={this.onSearchChange}
						onKeyDown={this.handleSearchKeyPress}
					/>
					<div className="fixedWidthItemList" width={this.props.width} onScroll={this.handleScroll} ref={ref => {this.listElement = ref}}>
						<ItemList {...this.props} />
					</div>
					</div>
			</Master>
		)
	}
} 