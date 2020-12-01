/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('找到"兴趣爱好"', () => {
    // https://on.cypress.io/type
    cy.visit('http://localhost:3000/intresets')
    cy.contains('主页').click()
    cy.contains('兴趣爱好').click()
  })
})
