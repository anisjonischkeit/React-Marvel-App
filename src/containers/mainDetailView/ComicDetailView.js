import * as React from 'react';
import DetailViewComponent from 'components/mainDetailView/DetailView';
import DetailViewStats from 'components/mainDetailView/DetailViewStats';

import { CardText } from 'material-ui/Card';

// import { bindActionCreators } from 'redux';
// import { fetchCharacters } from 'actions/data/characterActions'

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
						stories: selected.stories,
						events: selected.events,

					}}
					defaultStat='comics'
				/>

			</div>
		)

		return (
			<DetailViewComponent
				title={selected.title}
				subtitle={selected.id}
				img={`${selected.thumbnail.path}/landscape_incredible.${selected.thumbnail.extension}`}
				description={descriptionWithStats}
			/>
		)
	}
	return null
}

const mapStateToProps = state => {
	return {
		selectedId: state.data.comics.selectedId,
		charactersObj: state.data.comics.obj
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