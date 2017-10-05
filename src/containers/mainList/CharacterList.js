import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.name,
	subheading: item.id
})

class CharacterList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'characters')
		this.selectCharacter = props.selectDataItem.bind(this, 'characters')
	}

	componentDidMount() {
		this.props.fetchInitialData('characters')
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
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
		fetchInitialData,
		fetchMoreData,
		selectDataItem
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)