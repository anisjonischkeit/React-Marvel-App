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

		this.selectSeries = (id) => props.selectDataItem('series', id)
		this.fetchInitialData = () => props.fetchInitialData('series');
		this.setSeriesSearchField = value => props.setDataRetrievalParams('series', (value !== '' ? {titleStartsWith: value} : undefined))
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	_onListScroll(el) {
		const scroll = el.scrollTop
		const height = el.scrollHeight - el.offsetHeight
	
		if (scroll > height - 400) {
			console.log('fetch more')
			this.props.fetchMoreData('series')
		}
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Series'
				selectItem={this.selectSeries}
				handleScroll={this.onListScroll}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setSeriesSearchField}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { series } = state.data;

	let rawList = undefined
	if (series.order) {
		rawList = series.order.map(item => mapCharactersToItemList(series.obj[item], series.selectedId))
		if (series.firstItem) {
			rawList = [mapCharactersToItemList(series.firstItem, series.selectedId), ...rawList]
		}
	}

	return {
		childProps: {
			rawList
		},
		searchField: series.searchField
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