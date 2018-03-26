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

	fetchInitialData = () => this.props.fetchInitialData(this.props.reduxEntryPointName);

	selectData = (id) => this.props.selectDataItem(this.props.reduxEntryPointName, id)

	setDataSearchField = value => {
		let params = undefined;
		if (value !== '') {
			params = {[this.props.filterParamName]: value}
		}
		this.props.setDataRetrievalParams(this.props.reduxEntryPointName, params)
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

const orderData = (listData, mapItemToListFn) => {
	let rawList = []

	// if there are items then there will be an ordering
	if (listData.order) {

		// actually order the list
		rawList = listData.order.map((item, idx) => ({
			...mapItemToListFn(listData.obj[item], idx + 1),
			active: listData.obj[item].id === listData.selectedId
		}))

		// if we are going to a specific item, that item is popped
		// to the top of the list
		if (listData.firstItem) {
			rawList = [
				{
					...mapItemToListFn(listData.firstItem, 0), 
					active: listData.firstItem.id === listData.selectedId
				},
				...rawList
			]
		}
	}

	return rawList
}

const mapStateToProps = (state, props) => {
	const listData = state.data[props.reduxEntryPointName];

	const rawList = orderData(listData, props.mapDataItemToItemList)

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