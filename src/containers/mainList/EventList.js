import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.title,
	subheading: item.id
})

class ComicList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'events')
		this.selectCreator = props.selectDataItem.bind(this, 'events')
	}

	componentDidMount() {
		this.props.fetchInitialData('events')
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				listName='Events'
				selectItem={this.selectCreator}
				fetchMoreFunc={this.fetchMoreData}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { events } = state.data;
	return {
		childProps: {
			rawList: events.order && events.order.map(item => mapCharactersToItemList(events.obj[item]))
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