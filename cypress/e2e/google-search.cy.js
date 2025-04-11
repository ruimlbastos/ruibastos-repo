describe('Google UI Search - VFX Financial', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com');
  
      // handle cookie modals
      cy.get('body', { timeout: 10000 }).then(($body) => {
        if ($body.find('div[role="dialog"]').length > 0) {
            cy.get('div[role="dialog"] button').contains(/Aceitar tudo|I agree/i).click({ force: true });
        }
      });
    });
  
    it('should find VFX Financial PLC in the knowledge panel', () => {
        cy.get('#APjFqb', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true })
          .clear()
  
          .type('VFX Financial', { delay: 500 }) 
          .type('{enter}', { delay: 500 });
    
        cy.get('h2[data-attrid="title"] span', { timeout: 15000 })
          .should('be.visible')
          .should('contain.text', 'VFX Financial Plc');
      });
  });
  