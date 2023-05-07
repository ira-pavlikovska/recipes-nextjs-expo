describe('happy path: login / list / recipe-details', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    // login
    cy.get('[placeholder="email"]').type('iryna@example.com')
    cy.get('[placeholder="password"]').type('password')
    cy.get('[role="button"]').click() // open list page

    // check list page has 11 recipes (11 images)
    cy.get('img').then(($elements) => {
      expect($elements).to.have.length(11)
    })

    cy.get('[href="/recipe/34"]').click() // open recipe details 'Spinach & Artichoke...'

    cy.get('div').should(
      'contain',
      'Spinach & Artichoke Dip" Gnocchi Bake with Cauliflower'
    )
    cy.get('div').should('contain', 'Ingredients')
    cy.get('div').should('contain', '- Alfredo sauce')
    cy.get('div').should('contain', 'Instructions')
    cy.get('div').should('contain', '- Preheat oven to 450°F.')
    cy.get('div').should('contain', '👈 Back to recipes')
  })
})
