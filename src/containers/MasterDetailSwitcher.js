import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDataItem } from 'actions/data/characterActions';

export default class MasterDetailSwitcher extends React.Component {
	render() {
		return (
			<div>
				<this.props.masterComponent />
				<this.props.detailComponent />
			</div>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispath => ({
	...bindActionCreators({
		selectDataItem
	}, dispath)
})

connect(mapStateToProps, mapDispatchToProps)(MasterDetailSwitcher)