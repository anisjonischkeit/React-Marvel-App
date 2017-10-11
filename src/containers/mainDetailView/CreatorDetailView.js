import * as React from 'react';
import DetailViewComponent from 'components/mainDetailView/DetailView';
import DetailViewStats from 'components/mainDetailView/DetailViewStats';

import { CardText } from 'material-ui/Card';
import { withRouter } from 'react-router-dom'

import { bindActionCreators } from 'redux';
import { fetchIndividualDataItem } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const DetailViewContainer = withRouter(props => {

	const onClickHandler = (dataName, resourceURI) => {
		props.fetchIndividualDataItem(dataName, resourceURI)
		props.history.push(`/${dataName}`)
	}

	if (props.selectedId && props.charactersObj) {
		let selected = props.charactersObj[props.selectedId];
		
		if (selected == null) {
			console.log(props)
			if (props.firstItem && props.selectedId === props.firstItem.id) {
				selected = props.firstItem
			} else {
				return null
			}
		}

		const descriptionWithStats = (
			<div>
				<CardText>
				 	{selected.description}
				</CardText>
				
				<DetailViewStats
					stats={{
						comics: {...selected.comics, onClickHandler: onClickHandler.bind(null, 'comics')},
						series: {...selected.series, onClickHandler: onClickHandler.bind(null, 'series')},
						// stories: {...selected.stories, onClickHandler: onClickHandler.bind(null, 'stories')},
						events: {...selected.events, onClickHandler: onClickHandler.bind(null, 'events')},

					}}
					defaultStat='comics'
				/>

			</div>
		)

		return (
			<DetailViewComponent
				title={selected.fullName}
				subtitle={selected.id}
				img={`${selected.thumbnail.path}/landscape_incredible.${selected.thumbnail.extension}`}
				description={descriptionWithStats}
			/>
		)
	}
	return null
})

const mapStateToProps = state => {
	return {
		selectedId: state.data.creators.selectedId,
		charactersObj: state.data.creators.obj,
		firstItem: state.data.creators.firstItem
	}
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
		fetchIndividualDataItem
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailViewContainer)


/*

			</CardText>
			<CardActions>
				<FlatButton label="Action1" />
				<FlatButton label="Action2" />
			</CardActions>

			*/