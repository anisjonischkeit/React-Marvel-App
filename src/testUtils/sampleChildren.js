import React from 'react'

export const getSampleChildren = () => [
  <p key="sampleChild" id="sampleChild">sampleChild</p>,
  <p key="sampleChild2" id="sampleChild2">sampleChild</p>
]

export const testRendersChildren = (component) => {
  it("Renders Children", () => {
    expect(component.find("#sampleChild").exists()).toBe(true)
    expect(component.find("#sampleChild2").exists()).toBe(true)
    expect(component.find("#sampleChild1000").exists()).toBe(false)
  })
}