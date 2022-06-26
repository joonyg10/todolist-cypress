describe('todo header testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('todo-header must have title', () => {
    cy.findByRole('heading', { name: /Your todos/i }).should('be.visible')
  })

  it.only('Add new todo', () => {
    cy.findByPlaceholderText(/enter new todo/i).as('addTodoInput')
    cy.get('@addTodoInput').should('be.visible')
    // cy.findByPlaceholderText(/Enter new todo/i).should('be.visible')
    cy.get('@addTodoInput').clear().type('Study Cypress')
    cy.findByPlaceholderText(/Enter new todo/i)
      .clear()
      .type('Study Cypress')
    cy.findByRole('button', { name: /ADD/i, hidden: true }).click()
    cy.findByPlaceholderText(/enter new todo/i).clear()
    cy.findByText(/Study cypress/i).should('be.visible')
  })

  it('delete todos', () => {
    cy.findByRole('list', {}).children().as('@todo-items')
    cy.get('@todo-items').should('have.length', 3)

    cy.get('@todo-items').last().as('@delete-todo')
    cy.get('@delete-todo').findByRole('button', { hidden: true }).click()
    cy.get('@delete-todo').should('not.exist')
  })
})
