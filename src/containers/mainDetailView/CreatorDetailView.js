import * as React from 'react';
import DetailView from 'containers/mainDetailView/DetailView';

export default () => (
	<DetailView
		displayName='Creators'
		statNames={['comics', 'events', 'series']}
		reduxEntryPointName='creators'
		titleFieldName='fullName'
	/>
)