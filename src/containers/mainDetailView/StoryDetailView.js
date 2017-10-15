import * as React from 'react';
import DetailViewComponent from 'components/mainDetailView/DetailView';
import DetailViewStats from 'components/mainDetailView/DetailViewStats';

import { CardText } from 'material-ui/Card';

import { connect } from 'react-redux';

const DetailViewContainer = props => {
	if (props.selectedId) {
		const selected = props.charactersObj[props.selectedId];
		
		const descriptionWithStats = (
			<div>
				<CardText>
				 	{selected.description}
				</CardText>
				
				<DetailViewStats
					stats={{
						creators: selected.creators,
						characters: selected.characters,
						comics: selected.comics,
						events: selected.events,
						series: selected.series,

					}}
					defaultStat='comics'
				/>

			</div>
		)

		return (
			<DetailViewComponent
				title={selected.title}
				subtitle={selected.id}
				img={selected.thumbnail && `${selected.thumbnail.path}/landscape_incredible.${selected.thumbnail.extension}`}
				description={descriptionWithStats}
			/>
		)
	}
	return null
}

const mapStateToProps = state => {
	return {
		selectedId: state.data.stories.selectedId,
		charactersObj: state.data.stories.obj
	}
}

export default connect(mapStateToProps)(DetailViewContainer)


/*

			</CardText>
			<CardActions>
				<FlatButton label="Action1" />
				<FlatButton label="Action2" />
			</CardActions>

			*/