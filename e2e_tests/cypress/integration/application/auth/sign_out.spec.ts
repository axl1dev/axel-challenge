/// <reference types="cypress" />

import { OpenMenuButton, SignOutButton } from '../../../pages/header'
import { SignInButton } from '../../../pages/login_page'

context('SignOut', () => {
  let user
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.createUser().then(({ user: u }) => {
      user = u
    })
    cy.visit('/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('properly sign in', () => {
    cy.login(user.attributes.external.email, '123456')

    SignInButton().should('not.exist')
  })

  it('properly sign out', () => {
    cy.login(user.attributes.external.email, '123456')
    SignInButton().should('not.exist')
    OpenMenuButton().click()
    SignOutButton().click()
    SignInButton().should('be.visible')
  })
})
