import React from 'react';
import { mount } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MasterViewItemList from "../MasterViewItemList"

import MarvelListItem from '../Item'
import TextField from 'material-ui/TextField';

import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"

describe("MasterViewItemList Component", () => {
	const clickTesters = [
		timesClickedSetup(),
		timesClickedSetup()
	]
	let searchField = ""
	const onSearchChangeCallback = value => {
		searchField = value
	}
	const { counter: executeSearchCounter, callBack: executeSearchCallback } = timesClickedSetup()
	const { counter: handleScrollCounter, callBack: handleScrollCallback } = timesClickedSetup()


	const itemListComponent = mount(
		(<MuiThemeProvider>
			<MasterViewItemList
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
				onSearchChange={onSearchChangeCallback}
				executeSearch={executeSearchCallback}
				handleScroll={handleScrollCallback}
				listName="Test List Name"
				width={50}
			/>
		</MuiThemeProvider>)
	)

	describe("Clicks Work", () => {
		const searchTextField = itemListComponent.find(TextField).first()
		
		it("Search Field Change triggers", () => {
			const searchFieldChangeFn = value => searchTextField.props().onChange({currentTarget: {value: value}})
			
			searchFieldChangeFn("test 1")
			expect(searchField).toBe("test 1")

			searchFieldChangeFn("test 2")
			expect(searchField).toBe("test 2")
		})

		testCallback("Enter triggers search", () => searchTextField.props().onKeyDown({keyCode: 13}), executeSearchCounter)
		
		const list = itemListComponent.find(".fixedWidthItemList")
		testCallback("Scroll is handled", list.props().onScroll, handleScrollCounter)

		it("Renders List Name", () => {
			expect(searchTextField.text()).toBe("Search Test List Name")
		})

		it("Renders correct width", () => {
			expect(list.props().width).toBe(50)
		})
	})
})