import React from 'react';

import MediaQuery from 'react-responsive';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDataItem } from 'actions/data/';

class MasterDetailSwitcher extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props.selectedId)
		const viewableContent = (
			<div>
				<MediaQuery query="(max-width: 960px)">
					{this.props.selectedId ? 
						<this.props.detailComponent
							onBackClick={this.selectDataItem}
						/>
						:
						<this.props.masterComponent />
					}
				</MediaQuery>
				<MediaQuery query="(min-width: 961px)">
					<div>
						<this.props.masterComponent />
						<this.props.detailComponent />
					</div>
				</MediaQuery>
			</div>

		)
		return viewableContent
	}
}

const mapStateToProps = (state, props) => ({
	selectedId: state.data[props.reduxEntryPointName].selectedId
})

const mapDispatchToProps = (dispath, props) => ({
	...bindActionCreators({
		selectDataItem
	}, dispath)
})

export default connect(mapStateToProps, mapDispatchToProps)(MasterDetailSwitcher)