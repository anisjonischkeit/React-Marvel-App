import * as React from 'react';
import DetailViewComponent from '../../components/detailView/DetailView';
import DetailItemProperties from '../../components/detailView/DetailItemProperties';

import type { DataType } from '../../reducers/data'

import { bindActionCreators } from 'redux';
import { fetchIndividualDataItem, selectDataItem } from '../../actions/data/'
import { withRouter } from 'react-router-dom'

import { CardText } from 'material-ui/Card';
import { connect } from 'react-redux';

import Detail from '../../components/masterDetailView/Detail'

type DataObjItemType = {
	id: number,
	thumbnail: {
		path: string,
		extension: string
	},
	description: string,
	characters: {
		items: Array<*>
	},
	comics: {
		items: Array<*>
	}
}

type PropsType = {
	selectedId : number,
	dataObj : {
		[id : number] : DataObjItemType
	},
	firstItem : DataObjItemType,
	history : { push : (url: string) => void },
	statNames : Array<string>,
	displayName : string,
	handleBackClick : () => void,
	titleFieldName : string,
	fetchIndividualDataItem : (dataName: string, resourceURI: string) => void 
}

export const DetailViewContainer = (props : PropsType) => {
	
	const onClickHandler = (dataName, resourceURI) => {
		props.fetchIndividualDataItem(dataName, resourceURI)
		props.history.push(`/${dataName}`)
	}

 	if (props.selectedId != null && props.dataObj) {
		let selected = props.dataObj[props.selectedId];

		if (selected == null) {
			if (props.firstItem && props.selectedId === props.firstItem.id) {
				selected = props.firstItem
			} else {
				return null
			}
		}
		
		let itemProperties = props.statNames.map(statName => ({
				...selected[statName],
				onClickHandler: onClickHandler.bind(null, statName),
				name: statName
			})
		)

		return (
			<Detail
				title={props.displayName}
				onBackClick={props.handleBackClick}
			>
				<DetailViewComponent
					title={selected[props.titleFieldName]}
					subtitle={String(selected.id)}
					img={`${selected.thumbnail.path}/landscape_incredible.${selected.thumbnail.extension}`}
				>
					<div>
						<CardText>
							{selected.description}
						</CardText>
						
						<DetailItemProperties
							itemProperties={itemProperties}
						/>

					</div>
				</DetailViewComponent>
			</Detail>
		)
	}
	return null
}

const mapStateToProps = (state, props) => {
	return {
		selectedId: state.data[props.reduxEntryPointName].selectedId,
		dataObj: state.data[props.reduxEntryPointName].obj,
		firstItem: state.data[props.reduxEntryPointName].firstItem
	}
}

const mapDispatchToProps = (dispatch, props) => ({
  ...bindActionCreators({
		fetchIndividualDataItem,
		handleBackClick: () => selectDataItem(props.reduxEntryPointName, null)
  }, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailViewContainer))