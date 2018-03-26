import * as React from 'react';
import MasterViewItemList from '../../components/masterView/MasterViewItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem, setDataRetrievalParams } from '../../actions/data/'
import { openSideBar } from '../../actions/template/sidebarActions'

import { connect } from 'react-redux';
import Master from '../../components/masterDetailView/Master'

type PropsType = {
	reduxEntryPointName: string,
	filterParamName: string,
	displayName: string
}

class List extends React.Component<PropsType> {
	constructor(props) {
		super(props)

		// doing this in the constructor rather than in render stops
		// functions from being re-created on each re-render
		this.selectData = (id) => props.selectDataItem(props.reduxEntryPointName, id)
		this.setDataSearchField = value => props.setDataRetrievalParams(props.reduxEntryPointName, (value !== '' ? {[props.filterParamName]: value} : undefined))
		this.fetchInitialData = () => props.fetchInitialData(props.reduxEntryPointName);
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	onListScroll = (el) => {
		const scroll = el.scrollTop
		const height = el.scrollHeight - el.offsetHeight
	
		if (!this.props.outOfData) {
			if (scroll > height - 400) {
				this.props.fetchMoreData(this.props.reduxEntryPointName)
			}
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
					selectItem={this.selectData}
					executeSearch={this.fetchInitialData}
					onSearchChange={this.setDataSearchField}
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
		outOfData: listData.outOfData
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