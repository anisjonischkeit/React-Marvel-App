import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailView from "../DetailView"

describe('DetailView', () => {
  describe("Renders correctly", () => {
    const itemProperties = mount(
      (<MuiThemeProvider>
				<DetailView
					title="Sample Title"
					subtitle="Sample SubTitle"
					img="http://sampleImgUrl.com"
				>
					<p id="sampleChild">sampleChild</p>
					<p id="sampleChild2">sampleChild</p>
				</DetailView>
      </MuiThemeProvider>)
    );

		it("Matches Snapshot", () => {
			let tree = toJson(itemProperties);
			expect(tree).toMatchSnapshot();
		})

		it("Renders Children", () => {
			expect(itemProperties.find("#sampleChild").exists()).toBeTruthy()
			expect(itemProperties.find("#sampleChild2").exists()).toBeTruthy()
			expect(itemProperties.find("#sampleChild1000").exists()).toBeFalsy()
		})
	})
	
})