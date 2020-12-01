/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('找到"消费特征"', () => {
    // https://on.cypress.io/type
    cy.visit('http://localhost:3000/consume')
    cy.contains('境外人群')
    cy.contains('汽车用户')
    cy.contains('主页').click()
    cy.contains('登录').click()
    cy.contains('主页').click()
    cy.contains('消费特征').click()
  })
})
