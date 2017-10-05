import * as React from 'react';
import FixedWidthItemListComponent from 'components/mainList/FixedWidthItemList';

import { bindActionCreators } from 'redux';
import { fetchInitialData, fetchMoreData, selectDataItem } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const mapCharactersToItemList = (item: any) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.firstName + (item.middleName ? ` ${item.middleName}` : '') + (item.lastName ? ` ${item.lastName}` : ''),
	subheading: item.id
})

class ComicList extends React.Component {
	constructor(props) {
		super(props)
		this.fetchMoreData = props.fetchMoreData.bind(this, 'creators')
		this.selectCreator = props.selectDataItem.bind(this, 'creators')
	}

	componentDidMount() {
		this.props.fetchInitialData('creators')
	}

	render() {
		return (
			<FixedWidthItemListComponent
				{...this.props.childProps}
				selectItem={this.selectCreator}
				fetchMoreFunc={this.fetchMoreData}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const { creators } = state.data;
	return {
		childProps: {
			rawList: creators.order && creators.order.map(item => mapCharactersToItemList(creators.obj[item]))
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