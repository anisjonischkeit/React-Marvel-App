import * as React from 'react';
import DetailView from './DetailView';

export default () => (
  <DetailView
    displayName='Comics'
    statNames={['characters', 'creators', 'events']}
    reduxEntryPointName='comics'
    titleFieldName='title'
  />
)