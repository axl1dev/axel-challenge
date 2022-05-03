import {
  SignInButton,
  EmailInput,
  PasswordInput,
  LoginButton
} from '../pages/login_page'

// CypressOnRails: dont remove these command
Cypress.Commands.add('appCommands', function (body) {
  cy.log('APP: ' + JSON.stringify(body))
  return cy
    .request({
      method: 'POST',
      url: '/__cypress__/command',
      body: JSON.stringify(body),
      log: true,
      failOnStatusCode: false
    })
    .then((response) => {
      if (response.status !== 201) {
        expect(response.body.message).to.be.empty
        expect(response.body.status).to.be.equal(201)
      }
      return response.body
    })
})

Cypress.Commands.add('app', function (name, commandOptions) {
  return cy
    .appCommands({ name: name, options: commandOptions })
    .then((body) => {
      return body[0]
    })
})

Cypress.Commands.add('appScenario', function (name, options = {}) {
  return cy.app('scenarios/' + name, options)
})

Cypress.Commands.add('appEval', function (code) {
  return cy.app('eval', code)
})

Cypress.Commands.add('appFactories', function (options) {
  return cy.app('factory_bot', options)
})

Cypress.Commands.add('appFixtures', function (options) {
  cy.app('activerecord_fixtures', options)
})

Cypress.Commands.add('serializeModel', function (options) {
  return cy.app('serialize_model', options)
})

Cypress.Commands.add('createUser', function (options) {
  return cy.appFactories([['create', 'user']]).then((results) => {
    const user = results[0]
    return cy
      .serializeModel(['UserSerializer', 'User', user.id])
      .then(({ data: user }) => {
        return { user }
      })
  })
})

Cypress.Commands.add('login', function (user, password) {
  cy.visit('/login')
  SignInButton().click()
  EmailInput().type(user)
  PasswordInput().type(password)
  LoginButton().click()
})
// CypressOnRails: end

// The next is optional
// beforeEach(() => {
//  cy.app('clean') // have a look at cypress/app_commands/clean.rb
// });

// comment this out if you do not want to attempt to log additional info on test fail
Cypress.on('fail', (err, runnable) => {
  // allow app to generate additional logging data
  Cypress.$.ajax({
    url: '/__cypress__/command',
    data: JSON.stringify({
      name: 'log_fail',
      options: {
        error_message: err.message,
        runnable_full_title: runnable.fullTitle()
      }
    }),
    async: false,
    method: 'POST'
  }).catch(console.error)

  throw err
})
