import React from 'react';

import ItemList from './ItemList';
import './MasterViewItemList.css'

import TextField from 'material-ui/TextField';

import CircularProgress from 'material-ui/CircularProgress';

export default class FixedWidthItemList extends React.Component {

	onSearchChange = e => {
		const value = e.currentTarget.value;
		this.props.onSearchChange(value);
	}

	handleSearchKeyPress = e => {
		const key = e.keyCode
		if (key === 13) {
			this.props.executeSearch()
		}
	}

	handleScroll = e => this.props.handleScroll(this.listElement);

	render() {
		return (
			<div className='fixedWidthItemListWrapper' >
				<TextField
					floatingLabelText={`Search ${this.props.listName}`}
					fullWidth
					onChange={this.onSearchChange}
					onKeyDown={this.handleSearchKeyPress}
				/>
				<div className="fixedWidthItemList" width={this.props.width} onScroll={this.handleScroll} ref={ref => {this.listElement = ref}}>
					<ItemList {...this.props} />
					
					{ this.props.loading ?
						(
						<div>
							<br />
								<div style={{textAlign: 'center'}}>
									<CircularProgress />
								</div>
							<br />
						</div>
						)
					:
						null
					}
				</div>
			</div>
		)
	}
} 