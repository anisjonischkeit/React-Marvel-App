import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: item.thumbnail && `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.title,
	subheading: item.id
})

class ComicList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'stories')
		this.selectCharacter = props.selectDataItem.bind(this, 'stories')
	}

	componentDidMount() {
		this.props.fetchInitialData('stories')
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Stories'
				selectItem={this.selectCharacter}
				fetchMoreFunc={this.fetchMoreData}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { stories } = state.data;
	return {
		childProps: {
			rawList: stories.order && stories.order.map(item => mapCharactersToItemList(stories.obj[item]))
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