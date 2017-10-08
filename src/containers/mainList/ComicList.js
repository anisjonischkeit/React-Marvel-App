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
		this.fetchMoreData = props.fetchMoreData.bind(this, 'comics')
		this.selectCharacter = props.selectDataItem.bind(this, 'comics')
		this.setComicsSearchField = value => props.setDataRetrievalParams('comics', (value !== '' ? {titleStartsWith: value} : undefined))
		this.fetchInitialData = props.fetchInitialData.bind(this, 'comics');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Comics'
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setComicsSearchField}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { comics } = state.data;
	return {
		childProps: {
			rawList: comics.order && comics.order.map(item => mapCharactersToItemList(comics.obj[item], comics.selectedId))
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