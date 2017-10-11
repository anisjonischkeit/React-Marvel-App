import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem, setDataRetrievalParams } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any, activeId) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.title,
	subheading: item.id,
	active: item.id === activeId
})

class ComicList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'events')
		this.selectCreator = props.selectDataItem.bind(this, 'events')
		this.setEventSearchField = value => props.setDataRetrievalParams('events', (value !== '' ? {nameStartsWith: value} : undefined))
		this.fetchInitialData = props.fetchInitialData.bind(this, 'events');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Events'
				selectItem={this.selectCreator}
				fetchMoreFunc={this.fetchMoreData}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setEventSearchField}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { events } = state.data;

	let rawList = undefined
	if (events.order) {
		rawList = events.order.map(item => mapCharactersToItemList(events.obj[item], events.selectedId))
		if (events.firstItem) {
			rawList = [mapCharactersToItemList(events.firstItem, events.selectedId), ...rawList]
		}
	}

	return {
		childProps: {
			rawList
		},
		searchField: events.searchField
	};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchInitialData,
		fetchMoreData,
		selectDataItem,
		setDataRetrievalParams
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ComicList)