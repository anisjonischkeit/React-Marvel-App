import * as React from 'react';
import DetailView from 'containers/mainDetailView/DetailView';

export default () => (
	<DetailView
		statNames={['characters', 'creators', 'events']}
		reduxEntryPointName='comics'
		titleFieldName='title'
	/>
)