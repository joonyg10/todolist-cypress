describe('todo header testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('todo-header must have title', () => {
    cy.findByRole('heading', { name: /Your todos/i }).should('be.visible')
  })

  it('Add new todo', () => {
    cy.findByPlaceholderText(/Enter new todo/i).should('be.visible')
    cy.findByPlaceholderText(/Enter new todo/i)
      .clear()
      .type('Study Cypress')
    cy.findByRole('button', { name: /ADD/i, hidden: true }).click()
    cy.findByPlaceholderText(/enter new todo/i).clear()
    cy.findByText(/Study cypress/i).should('be.visible')
  })
})
