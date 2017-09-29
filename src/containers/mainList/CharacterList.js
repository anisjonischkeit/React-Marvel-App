import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchCharacters } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: item.thumbnail.path,
	heading: item.name,
	subheading: item.id
})

class CharacterList extends React.Component {
	componentDidMount() {
		this.props.fetchCharacters() //change to use middleware once you have internet
	}

	render() {
		return <FixedWidthItemListComponent {...this.props.childProps}/>
	}
}

const mapStateToProps = (state) => ({
	childProps: {
		rawList: state.data.characters.list && state.data.characters.list.map(mapCharactersToItemList),
	}
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchCharacters
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)