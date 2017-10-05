import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialCharacters, fetchMoreCharacters, selectCharacter } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.name,
	subheading: item.id
})

class CharacterList extends React.Component {
	componentDidMount() {
		this.props.fetchInitialCharacters()
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				selectItem={this.props.selectCharacter}
				fetchMoreFunc={this.props.fetchMoreCharacters}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { characters } = state.data;
	return {
		childProps: {
			rawList: characters.order && characters.order.map(item => mapCharactersToItemList(characters.obj[item])),
		}
	}
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchInitialCharacters,
		fetchMoreCharacters,
		selectCharacter
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)