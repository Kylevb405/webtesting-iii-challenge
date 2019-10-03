// Test away

import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />); 
    
        expect(tree.toJSON()).toMatchSnapshot();
      }); 

    it('should render controls & display',() => {
        const { getByText } = render(<Dashboard />)
        getByText(/unlocked/i)
        getByText(/lock gate/i)
        getByText(/open/i)
        getByText(/close gate/i)
    })
})