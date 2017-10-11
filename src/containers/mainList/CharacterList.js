import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem, setDataRetrievalParams } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any, activeId) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.name,
	subheading: item.id,
	active: item.id === activeId
})

class CharacterList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'characters')
		this.selectCharacter = props.selectDataItem.bind(this, 'characters')
		this.setCharacterSearchField = value => props.setDataRetrievalParams('characters', (value !== '' ? {nameStartsWith: value} : undefined))
		this.fetchInitialData = props.fetchInitialData.bind(this, 'characters');
	}

	componentDidMount() {
		this.fetchInitialData()
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Characters'
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
				executeSearch={this.fetchInitialData}
				onSearchChange={this.setCharacterSearchField}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { characters } = state.data;

	let rawList = undefined
	if (characters.order) {
		rawList = characters.order.map(item => mapCharactersToItemList(characters.obj[item], characters.selectedId))
		if (characters.firstItem) {
			rawList = [mapCharactersToItemList(characters.firstItem, characters.selectedId), ...rawList]
		}
	}

	return {
		childProps: {
			rawList
		},
		searchField: characters.searchField
	}
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchInitialData,
		fetchMoreData,
		selectDataItem,
		setDataRetrievalParams
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)