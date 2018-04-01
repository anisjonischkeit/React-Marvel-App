import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'

import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Detail from "../Detail"

import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"


describe("Detail Component", () => {
	let { counter, callBack: backClickCallback } = timesClickedSetup()

	const detailComponent = mount(
		(<MuiThemeProvider>
			<Detail
				title="Sample Title"
				onBackClick={backClickCallback}
			>
				<p id="sampleChild">sampleChild</p>
				<p id="sampleChild2">sampleChild</p>
			</Detail>
		</MuiThemeProvider>)
	)

	describe("Renders correctly", () => {
		it("Matches Snapshot", () => {
			let tree = toJson(detailComponent);
			expect(tree).toMatchSnapshot();
		})

		it("Renders Children", () => {
			expect(detailComponent.find("#sampleChild").exists()).toBeTruthy()
			expect(detailComponent.find("#sampleChild2").exists()).toBeTruthy()
			expect(detailComponent.find("#sampleChild1000").exists()).toBeFalsy()
		})

	})
	
	describe("onClicks trigger Correctly", () => {
		const backBtnClick = detailComponent.find(IconButton).first().props().onClick
		testCallback("onBackClick Triggers correctly", backBtnClick, counter)
	})

})