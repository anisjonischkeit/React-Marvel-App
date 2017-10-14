import * as React from 'react';
import DetailView from 'containers/mainDetailView/DetailView';

export default () => (
	<DetailView
		statNames={['comics', 'series', 'events']}
		reduxEntryPointName='characters'
		titleFieldName='name'
	/>
)