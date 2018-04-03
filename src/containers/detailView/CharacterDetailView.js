import * as React from 'react';
import DetailView from './DetailView';

export default () => (
  <DetailView
    displayName='Characters'
    statNames={['comics', 'series', 'events']}
    reduxEntryPointName='characters'
    titleFieldName='name'
  />
)