describe('todo header testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('todo-header must have title', () => {
    cy.findByRole('heading', { name: /Your todos/i }).should('be.visible')
  })

  it('Add new todo', () => {
    cy.findByPlaceholderText('Enter new todo').should('be.visible')
    cy.findByPlaceholderText('Enter new todo').clear().type('Study Cypress')
    cy.findByRole('button', { name: /ADD/i, hidden: true }).click()
    cy.findByText(/Study cypress/i).should('be.visible')
  })
})
