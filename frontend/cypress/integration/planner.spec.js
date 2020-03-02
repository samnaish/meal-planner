describe('Meal Planner Integration', () => {
    
    it('should load fine', () => {
        cy.visit('https://meal-planner.samnaish.now.sh');
        cy.get('.recipes-button[href="/recipes"]').click();
        cy.get('.recipes__list-item').should('have.length', 17);
    });


    it('recipes link through fine', () => {
        cy.visit('https://meal-planner.samnaish.now.sh/recipes');
        cy.get('.link a').first().click();
        
        cy.location('pathname').should('equal', '/recipes/5dc83723873e02521935c0f2');
        cy.get('.recipe__title').contains('Beef goulash');
    })

    it('user signup works fine', () => {
        cy.visit('https://meal-planner.samnaish.now.sh/signup');
        cy.get('input[name=first_name]').type('first')
        cy.get('input[name=last_name]').type('last');
        cy.get('input[name=email]').type('first@last.com');
        cy.get('input[name=password]').type('Password');
        cy.get('input[name=confirm_password]').type('Password');
        cy.get('button[type=submit]').click();
        
    })


    it('user login works', () => {
        const email = 'first@last.com';
        const pass = 'Password';
        cy.visit('https://meal-planner.samnaish.now.sh/login');
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(pass); 
        cy.get('button[type=submit]').click();
        // cy.get('.nav__anchor[href="/profile"]').contains('hello first', { matchCase: false });
    })

    it('user able to search and find dishes', () => {
        cy.visit('https://meal-planner.samnaish.now.sh');
        cy.get('.nav__anchor[href="/search"]').click();
        cy.get('.search__bar').type('chicken');
        cy.get('.search__button').click();
    })

});