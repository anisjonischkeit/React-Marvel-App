import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/SideBarItemList';

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
		
		this.onListScroll = this._onListScroll.bind(this);
		
		this.selectEvent = (id) => props.selectDataItem('events', id)
		this.setEventSearchField = value => props.setDataRetrievalParams('events', (value !== '' ? {nameStartsWith: value} : undefined))
		this.fetchInitialData = () => props.fetchInitialData('events');
		
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	_onListScroll(el) {
		const scroll = el.scrollTop
		const height = el.scrollHeight - el.offsetHeight
	
		if (scroll > height - 400) {
			console.log('fetch more')
			this.props.fetchMoreData('events')
		}
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Events'
				selectItem={this.selectEvent}
				handleScroll={this.onListScroll}				
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