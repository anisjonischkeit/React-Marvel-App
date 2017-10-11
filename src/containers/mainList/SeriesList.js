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
		this.fetchMoreData = props.fetchMoreData.bind(this, 'series')
		this.selectCharacter = props.selectDataItem.bind(this, 'series')
		this.setSeriesSearchField = value => props.setDataRetrievalParams('series', (value !== '' ? {titleStartsWith: value} : undefined))
		this.fetchInitialData = props.fetchInitialData.bind(this, 'series');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Series'
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
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