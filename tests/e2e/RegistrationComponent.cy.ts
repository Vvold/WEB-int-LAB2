describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/registration');
  });

  it('Allows user to sign up', () => {
    // Заповнення форми
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('johndoe@example.com');
    cy.get('#password').type('password');
    cy.get('#sex').select('Male');
    cy.get('#birth_date').type('1990-01-01');

    // Натискання кнопки "Sign Up"
    cy.get('#sign_up_button').click();

    // Перевірка, чи перекинуло на головну сторінку
    cy.url().should('include', '/main');

    // Перевірка, чи збережено користувача в localStorage
    cy.window()
      .its('localStorage.user')
      .should('be.a', 'string')
      .and('not.be.empty');

    // Перевірка, чи збережено інформацію для входу в localStorage
    cy.window()
      .its('localStorage.loginInfo')
      .should('be.a', 'string')
      .and('not.be.empty');
  });

  it('Redirects to login page when Login link is clicked', () => {
    // Натискання на посилання "Login"
    cy.get('a').contains('Login').click();

    // Перевірка переходу на сторінку входу
    cy.url().should('include', '/login');
  });
});
