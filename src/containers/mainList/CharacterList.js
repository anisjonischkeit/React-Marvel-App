import * as React from 'react';
import ItemListComponent from 'components/mainList/ItemList';

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
		fetchCharacters() //change to use middleware once you have internet
	}

	render() {
		return <ItemListComponent {...this.props.childProps}/>
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