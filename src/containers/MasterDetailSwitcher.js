import React from 'react';

import MediaQuery from 'react-responsive';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDataItem } from '../actions/data/';

const MasterDetailSwitcher = props => (
  <div>
    <MediaQuery query="(max-width: 960px)">
      {props.selectedId ? 
        <props.detailComponent
          onBackClick={selectDataItem}
        />
        :
        <props.masterComponent />
      }
    </MediaQuery>
    <MediaQuery query="(min-width: 961px)">
      <div>
        <props.masterComponent />
        <props.detailComponent />
      </div>
    </MediaQuery>
  </div>
)

const mapStateToProps = (state, props) => ({
  selectedId: state.data[props.reduxEntryPointName].selectedId
})

const mapDispatchToProps = (dispath, props) => ({
  ...bindActionCreators({
    selectDataItem
  }, dispath)
})

export default connect(mapStateToProps, mapDispatchToProps)(MasterDetailSwitcher)