import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'

import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Detail from "../Detail"

describe("Detail Component", () => {
	let timesGoneBack = 0
	const backClickHandler = () => {
		timesGoneBack += 1
	}

	const detailComponent = mount(
		(<MuiThemeProvider>
			<Detail
				title="Sample Title"
				onBackClick={backClickHandler}
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
		it("onBackClick Triggers correctly", () => {
			const backBtnClick = detailComponent.find(IconButton).first().props().onClick
			expect(timesGoneBack).toBe(0)
			backBtnClick()
			expect(timesGoneBack).toBe(1)
			backBtnClick()
			expect(timesGoneBack).toBe(2)
			backBtnClick()
			backBtnClick()
			backBtnClick()
			expect(timesGoneBack).toBe(5)
		})
	})

})