/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React, {useState} from 'react';
//import ReactTestUtils from 'react-dom/test-utils'; 
import Header from '../components/Header'
import { render } from '@testing-library/preact';
//import ReactDOM from 'react-dom'

describe('Header Component', () => {
    
    it('has an class Navbar', () => {
        const [theme, setTheme] = useState<boolean>(true)
        const { container } = render(<Header urlAvatar='https://avatars.githubusercontent.com/u/1848186?v=4' themeDefault={theme} callback={setTheme} />);
        expect(container.querySelector('.navbar') ).toBeInTheDocument();
    
        //const component = ReactTestUtils.renderIntoDocument(<Header urlAvatar='https://avatars.githubusercontent.com/u/1848186?v=4' />);    
        //var nav = ReactTestUtils.findRenderedDOMComponentWithTag(
        //component, 'nav'
        //);
    });
   
    /*it('is wrapped inside a Navbar class', () => {
        const component = ReactTestUtils.renderIntoDocument(<Header urlAvatar='https://avatars.githubusercontent.com/u/1848186?v=4'/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'navbar'
        );
    })*/
})

describe('Component Header', () => {
 
    it('passing test', () => {
      expect(true).toBeTruthy();
    })
   
    it('failing test', () => {
      expect(false).toBeFalsy();
    })
})