import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/SideBarItemList';

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
		
		this.onListScroll = this._onListScroll.bind(this);
		
		this.selectCreator = (id) => props.selectDataItem('creators', id)
		this.setCreatorSearchField = value => props.setDataRetrievalParams('creators', (value !== '' ? {nameStartsWith: value} : undefined))
		this.fetchInitialData = () => props.fetchInitialData('creators');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	_onListScroll(el) {
		const scroll = el.scrollTop
		const height = el.scrollHeight - el.offsetHeight
	
		if (scroll > height - 400) {
			console.log('fetch more')
			this.props.fetchMoreData('creators')
		}
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Creators'
				selectItem={this.selectCreator}
				handleScroll={this.onListScroll}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setCreatorSearchField}
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