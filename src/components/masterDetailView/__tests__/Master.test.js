import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'

import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Master from "../Master"
import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"
import { getSampleChildren, testRendersChildren } from "../../../testUtils/sampleChildren"

describe("Master Component", () => {
	let { counter, callBack: menuClickCallback } = timesClickedSetup()

	const detailComponent = mount(
		(<MuiThemeProvider>
			<Master
				title="My Test Sample Title"
				onMenuClick={menuClickCallback}
			>
				{getSampleChildren()}
			</Master>
		</MuiThemeProvider>)
	)

	describe("Renders correctly", () => {
		it("Renders Title", () => {
			expect(detailComponent.find("h1").text()).toBe("My Test Sample Title")
		})

		testRendersChildren(detailComponent)
	})
	
	describe("onClicks trigger Correctly", () => {
		const backBtnClick = detailComponent.find(IconButton).first().props().onClick
		testCallback("onBackClick Triggers correctly", backBtnClick, counter)
	})
})