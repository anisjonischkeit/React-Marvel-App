import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem, setDataRetrievalParams } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any, activeId) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.fullName,
	subheading: item.id,
	active: item.id === activeId
})

class ComicList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'creators')
		this.selectCreator = props.selectDataItem.bind(this, 'creators')
		this.setCreatorsSearchField = value => props.setDataRetrievalParams('creators', (value !== '' ? {nameStartsWith: value} : undefined))
		this.fetchInitialData = props.fetchInitialData.bind(this, 'creators');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Creators'
				selectItem={this.selectCreator}
				fetchMoreFunc={this.fetchMoreData}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setCreatorsSearchField}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { creators } = state.data;

	let rawList = undefined
	if (creators.order) {
		rawList = creators.order.map(item => mapCharactersToItemList(creators.obj[item], creators.selectedId))
		if (creators.firstItem) {
			rawList = [mapCharactersToItemList(creators.firstItem, creators.selectedId), ...rawList]
		}
	}

	return {
		childProps: {
			rawList
		},
		searchField: creators.searchField
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