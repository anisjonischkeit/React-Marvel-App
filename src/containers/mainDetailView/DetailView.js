import * as React from 'react';
import DetailViewComponent from 'components/mainDetailView/DetailView';
import DetailViewStats from 'components/mainDetailView/DetailViewStats';

import { bindActionCreators } from 'redux';
import { fetchIndividualDataItem, selectDataItem } from 'actions/data/'
import { withRouter } from 'react-router-dom'

import { CardText } from 'material-ui/Card';
import { connect } from 'react-redux';

import Detail from 'components/masterDetail/Detail'

const DetailViewContainer = withRouter(props => {
	
	const onClickHandler = (dataName, resourceURI) => {
		props.fetchIndividualDataItem(dataName, resourceURI)
		props.history.push(`/${dataName}`)
	}

 	if (props.selectedId && props.dataObj) {
		let selected = props.dataObj[props.selectedId];
		if (selected == null) {
			if (props.firstItem && props.selectedId === props.firstItem.id) {
				selected = props.firstItem
			} else {
				return null
			}
		}
		
		let stats = {}
		props.statNames.forEach(key => { 
			stats[key] = {...selected[key], onClickHandler: onClickHandler.bind(null, key)}
		})

		const descriptionWithStats = (
			<div>
				<CardText>
				 	{selected.description}
				</CardText>
				
				<DetailViewStats
					stats={stats}
				/>

			</div>
		)

		return (
			<Detail
				title={props.displayName}
				onBackClick={props.handleBackClick}
			>
				<DetailViewComponent
					title={selected[props.titleFieldName]}
					subtitle={selected.id}
					img={`${selected.thumbnail.path}/landscape_incredible.${selected.thumbnail.extension}`}
					description={descriptionWithStats}
				/>
			</Detail>
		)
	}
	return null
})

const mapStateToProps = (state, props) => {
	return {
		selectedId: state.data[props.reduxEntryPointName].selectedId,
		dataObj: state.data[props.reduxEntryPointName].obj,
		firstItem: state.data[props.reduxEntryPointName].firstItem
	}
}

const mapDispatchToProps = (dispatch, props) => ({
  ...bindActionCreators({
		fetchIndividualDataItem,
		handleBackClick: () => selectDataItem(props.reduxEntryPointName, null)
  }, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(DetailViewContainer)