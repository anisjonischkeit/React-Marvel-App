import * as React from 'react';
import DetailViewComponent from 'components/mainDetailView/DetailView';
import DetailViewStats from 'components/mainDetailView/DetailViewStats';

import { bindActionCreators } from 'redux';
import { fetchIndividualDataItem } from 'actions/data/characterActions'
import { withRouter } from 'react-router-dom'

import { CardText } from 'material-ui/Card';
import { connect } from 'react-redux';

const DetailViewContainer = withRouter(props => {
	
	const onClickHandler = (dataName, resourceURI) => {
		props.fetchIndividualDataItem(dataName, resourceURI)
		props.history.push(`/${dataName}`)
	}

 	if (props.selectedId && props.charactersObj) {
		let selected = props.charactersObj[props.selectedId];
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
			<DetailViewComponent
				onBackClick={props.onBackClick}
				title={selected[props.titleFieldName]}
				subtitle={selected.id}
				img={`${selected.thumbnail.path}/landscape_incredible.${selected.thumbnail.extension}`}
				description={descriptionWithStats}
			/>
		)
	}
	return null
})

const mapStateToProps = (state, props) => {
	return {
		selectedId: state.data[props.reduxEntryPointName].selectedId,
		charactersObj: state.data[props.reduxEntryPointName].obj,
		firstItem: state.data[props.reduxEntryPointName].firstItem
	}
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchIndividualDataItem
  }, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(DetailViewContainer)