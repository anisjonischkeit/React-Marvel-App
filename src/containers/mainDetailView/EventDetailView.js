import * as React from 'react';
import DetailView from 'containers/mainDetailView/DetailView';

export default () => (
	<DetailView
		statNames={['comics', 'creators', 'series']}
		reduxEntryPointName='events'
		titleFieldName='title'
	/>
)