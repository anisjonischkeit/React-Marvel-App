import * as React from 'react';
import DetailView from './DetailView';

export default () => (
  <DetailView
    displayName='Series'
    statNames={['characters', 'comics', 'creators', 'events']}
    reduxEntryPointName='series'
    titleFieldName='title'
  />
)