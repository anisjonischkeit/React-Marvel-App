import * as React from 'react';
import MasterViewItemList from 'components/mainList/MasterViewItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem, setDataRetrievalParams } from 'actions/data/'
import { openSideBar } from 'actions/template/sidebarActions'

import { connect } from 'react-redux';
import Master from 'components/masterDetail/Master'

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
			<Master
				title={this.props.displayName}
				onMenuClick={this.props.openSideBar}
			>
				<MasterViewItemList
					{...this.props.childProps}
					handleScroll={this.onListScroll}
					listName={this.props.displayName}
					selectItem={this.selectCharacter}
					executeSearch={this.fetchInitialData}
					onSearchChange={this.setCharacterSearchField}
				/>
			</Master>
		)
	}
}

const mapStateToProps = (state, props) => {
	const listData = state.data[props.reduxEntryPointName];

	let rawList = undefined
	if (listData.order) {
		rawList = listData.order.map((item, idx) => ({
			...props.mapDataItemToItemList(listData.obj[item], idx + 1),
			active: listData.obj[item].id === listData.selectedId
		}))
		if (listData.firstItem) {
			rawList = [
				{
					...props.mapDataItemToItemList(listData.firstItem, 0), 
					active: listData.firstItem.id === listData.selectedId
				},
				...rawList
			]
		}
	}

	return {
		childProps: {
			rawList,
			loading: listData.loading
		},
		searchField: listData.searchField,

	}
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchInitialData,
		fetchMoreData,
		selectDataItem,
		setDataRetrievalParams,
		openSideBar
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(List)