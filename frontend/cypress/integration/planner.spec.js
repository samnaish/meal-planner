describe('Meal Planner Integration', () => {
    
    it('should load fine', () => {
        cy.visit('https://meal-planner.samnaish.now.sh');
        cy.get('.recipes-button[href="/recipes"]').click();
        cy.get('.recipes__list-item').should('have.length', 18);
    });


    it('recipes link through fine', () => {
        cy.visit('https://meal-planner.samnaish.now.sh/recipes');
        cy.get('.link a').first().click();
        
        cy.location('pathname').should('equal', '/recipes/1');
        cy.get('.recipe__title').contains('Spaghetti Bolognese');
    })

});