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

		this.selectCharacter = id => props.selectDataItem('comics', id)
		this.setComicsSearchField = value => props.setDataRetrievalParams('comics', (value !== '' ? {titleStartsWith: value} : undefined))
		this.fetchInitialData = () =>props.fetchInitialData('comics');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	_onListScroll(el) {
		const scroll = el.scrollTop
		const height = el.scrollHeight - el.offsetHeight
	
		if (scroll > height - 400) {
			console.log('fetch more')
			this.props.fetchMoreData('comics')
		}
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Comics'
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
				executeSearch={this.fetchInitialData}
				handleScroll={this.onListScroll}
				onSearchChange={this.setComicsSearchField}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { comics } = state.data;
	let rawList = undefined
	if (comics.order) {
		rawList = comics.order.map(item => mapCharactersToItemList(comics.obj[item], comics.selectedId))
		if (comics.firstItem) {
			rawList = [mapCharactersToItemList(comics.firstItem, comics.selectedId), ...rawList]
		}
	}

	return {
		childProps: {
			rawList
		},
		searchField: comics.searchField
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