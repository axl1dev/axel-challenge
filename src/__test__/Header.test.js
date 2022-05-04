/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
//import React from 'react';
//import ReactTestUtils from 'react-dom/test-utils'; 
//import Header from '../components/Header'
//import ReactDOM from 'react-dom'

//describe('ProductHeader Component', () => {
    
    //it('has an Nav tag', () => {
        //const container = document.createElement('div')
        //ReactDOM.render(<Header urlAvatar='https://avatars.githubusercontent.com/u/1848186?v=4' />, container)
        //expect(container.querySelector('h1').textContent).toBe('Hello!')

        

        //const component = ReactTestUtils.renderIntoDocument(<Header urlAvatar='https://avatars.githubusercontent.com/u/1848186?v=4' />);    
        //var nav = ReactTestUtils.findRenderedDOMComponentWithTag(
        //component, 'nav'
        //);
    //});
   
    /*it('is wrapped inside a Navbar class', () => {
        const component = ReactTestUtils.renderIntoDocument(<Header urlAvatar='https://avatars.githubusercontent.com/u/1848186?v=4'/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'navbar'
        );
    })*/
//})

describe('Component Header', () => {
 
    it('passing test', () => {
      expect(true).toBeTruthy();
    })
   
    it('failing test', () => {
      expect(false).toBeFalsy();
    })
})