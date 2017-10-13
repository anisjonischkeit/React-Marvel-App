import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/SideBarItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem, setDataRetrievalParams } from 'actions/data/characterActions'

import { connect } from 'react-redux';

type PropsType = {
	reduxEntryPointName: string,
	filterParamName: string,
	displayName: string
}

class List extends React.Component<PropsType> {
	constructor(props) {
		super(props)
		
		this.onListScroll = this._onListScroll.bind(this);

		this.selectCharacter = (id) => props.selectDataItem(props.reduxEntryPointName, id)
		this.setCharacterSearchField = value => props.setDataRetrievalParams(props.reduxEntryPointName, (value !== '' ? {[props.filterParamName]: value} : undefined))
		this.fetchInitialData = () => props.fetchInitialData(props.reduxEntryPointName);
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	_onListScroll(el) {
		const scroll = el.scrollTop
		const height = el.scrollHeight - el.offsetHeight
	
		if (scroll > height - 400) {
			console.log('fetch more')
			this.props.fetchMoreData(this.props.reduxEntryPointName)
		}
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				handleScroll={this.onListScroll}
				listName={this.props.displayName}
				selectItem={this.selectCharacter}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setCharacterSearchField}
			/>
		)
	}
}

const mapStateToProps = (state, props) => {
	const listData = state.data[props.reduxEntryPointName];

	let rawList = undefined
	if (listData.order) {
		rawList = listData.order.map(item => ({
			...props.mapDataItemToItemList(listData.obj[item]),
			active: listData.obj[item].id === listData.selectedId
		}))
		if (listData.firstItem) {
			rawList = [
				{
					...props.mapDataItemToItemList(listData.firstItem), 
					active: listData.firstItem.id === listData.selectedId
				},
				...rawList
			]
		}
	}

	return {
		childProps: {
			rawList
		},
		searchField: listData.searchField
	}
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchInitialData,
		fetchMoreData,
		selectDataItem,
		setDataRetrievalParams
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(List)