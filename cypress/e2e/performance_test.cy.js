import "cypress-web-vitals";

describe('home page performance', () => {
    it('captures web vitals metrics', () => {
    
      cy.visit('www.amazon.com');
      cy.vitals()
   });
  });