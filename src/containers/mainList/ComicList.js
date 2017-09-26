import React from 'react';
import ItemListComponent from 'components/mainList/ItemList';

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: item.thumbnail.path,
	heading: item.name,
	subheading: item.id
})

const mapStateToProps = (state) => ({
  rawList: state.data.characters.list && state.data.characters.list.map(mapCharactersToItemList),
});

export default connect(mapStateToProps)(ItemListComponent)