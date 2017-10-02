import * as React from 'react';
import DetailViewComponent from 'components/mainList/DetailView';

// import { bindActionCreators } from 'redux';
// import { fetchCharacters } from 'actions/data/characterActions'

import { connect } from 'react-redux';

const DetailViewContainer = props => {
	if (props.selectedId) {
		const selected = props.charactersObj[props.selectedId];
		return (
			<DetailViewComponent
				title={selected.name}
				subtitle={selected.id}
				img={`${selected.thumbnail.path}standard_small${selected.thumbnail.extension}`}
				description={selected.description}
			/>
		)
	}
	return null
}

const mapStateToProps = state => {
	return {
		selectedId: state.data.characters.selectedId,
		charactersObj: state.data.characters.obj
	}
}

export default connect(mapStateToProps)(DetailViewContainer)