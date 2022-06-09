/// <reference types="cypress" />

describe('first test', () => {
  it('render app ', () => {
    cy.visit('/')
    cy.findByRole('heading', { name: /hello world/i }).should('be.visible')
  })
})
