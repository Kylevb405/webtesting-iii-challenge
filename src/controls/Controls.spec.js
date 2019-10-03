// Test away!


import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import Controls from './Controls'

describe('<Control />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />); 
    

        expect(tree.toJSON()).toMatchSnapshot();
      });



    it('should render btn to toggle closed and locked states', ()=>{
      const { getByText } = render(<Controls/>)
      getByText(/close gate/i)
      getByText(/lock gate/i)
    })


    it(' should disble lock/unlock btn when open', ()=>{
      const { getByText } = render(<Controls closed={false} />)
      const btn = getByText(/lock gate/i)
      expect(btn).toBeDisabled();
    })
    

    it('should disable open/close btn when locked', ()=>{
        const {getByText} = render(<Controls locked={true} />)
        const btn = getByText(/close gate/i)
        expect(btn).toBeDisabled()
    })
    

    it(' should toggleClosed change on btn click', ()=>{
        const toggleClosed = jest.fn();
        const { getByText } = render(<Controls toggleClosed={toggleClosed}/>) 
        const btn = getByText(/close gate/i)
        fireEvent.click(btn)
        expect(toggleClosed).toBeCalledTimes(1)
    })
})