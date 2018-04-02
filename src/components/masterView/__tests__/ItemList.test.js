import React from 'react';
import { mount } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ItemList from "../ItemList"

import MarvelListItem from '../Item'

import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"

describe("Item Component", () => {
	const clickTesters = [
		timesClickedSetup(),
		timesClickedSetup()
	]

	const listItemComponent = mount(
		(<MuiThemeProvider>
			<ItemList
				rawList={[
					{
						id: 1,
						someProperty1: "test prop 1"
					},
					{
						id: 2,
						someProperty2: "test prop 2"
					}
				]}
				loading={true}
				selectItem={(id) => clickTesters[id].callBack()}
			/>
		</MuiThemeProvider>)
	)

	const listItems = listItemComponent.find(MarvelListItem)

	listItems.forEach((item, idx) => {
		const counter = clickTesters[idx].counter
		const callback = () => item.props().selectItem(idx)
		
		testCallback(`selectItem Callback is called for item ${idx + 1} (id ${idx})`, callback, counter)
	})
})