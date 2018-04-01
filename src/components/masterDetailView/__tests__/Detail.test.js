import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'

import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Detail from "../Detail"

import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"
import { getSampleChildren, testRendersChildren } from "../../../testUtils/sampleChildren"


describe("Detail Component", () => {
	let { counter, callBack: backClickCallback } = timesClickedSetup()

	const detailComponent = mount(
		(<MuiThemeProvider>
			<Detail
				title="Sample Title"
				onBackClick={backClickCallback}
			>
				{getSampleChildren()}
			</Detail>
		</MuiThemeProvider>)
	)

	describe("Renders correctly", () => {
		testRendersChildren(detailComponent)
	})
	
	describe("onClicks trigger Correctly", () => {
		const backBtnClick = detailComponent.find(IconButton).first().props().onClick
		testCallback("onBackClick Triggers correctly", backBtnClick, counter)
	})

})