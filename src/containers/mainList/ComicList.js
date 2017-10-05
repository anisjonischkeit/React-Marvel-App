import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem } from 'actions/data/characterActions'

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
	}

	componentDidMount() {
		this.props.fetchInitialData('comics')
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Comics'
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { comics } = state.data;
	return {
		childProps: {
			rawList: comics.order && comics.order.map(item => mapCharactersToItemList(comics.obj[item], comics.selectedId))
		}
	};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchInitialData,
		fetchMoreData,
		selectDataItem
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ComicList)