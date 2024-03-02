describe('test logins', () => {

  beforeEach(()=> {
      cy.visit("/");
  });

  it('test wrong login', ()=> {
    cy.login('test@test.com','test');
    cy.contains("Добро пожаловать test@test.com").should('be.visible')
  });

  it('test not login with empty pass', ()=> {
    cy.loginEmptyPass('test@test.com');
    cy.get('#pass').then((elements) =>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  });

  it('test not login with empty mail', ()=>  {
    cy.loginEmptyMail('test');
    cy.get('#mail').then((elements) =>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  });
});