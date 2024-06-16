describe('Blog App', () => {
  beforeEach(() => {
    localStorage.setItem('loginInfo', JSON.stringify({ email: 'email', password: 'password' }))
    cy.visit('/profile');

    // Симулюємо логін користувача через localStorage
    cy.window().then((win) => {
      const user = {
        firstName: 'Test User',
        lastName: 'Test User',
        email: 'testuser@example.com',
        sex: 'Male',
        birth: '01/01/1990',
      };
      win.localStorage.setItem('user', JSON.stringify(user));
    });

    // Перевірка, чи є localStorage з користувачем
    cy.window().its('localStorage.user').should('be.a', 'string');
  });

  it('Displays user profile information', () => {
    // Перевірка наявності елементів профілю
    cy.get('.navbar-brand h1').should('contain.text', 'Blog APP');
    cy.get('.navbar-brand svg').should('be.visible');
    cy.get('.card-header').should('contain.text', 'About me');
    cy.get('#name').should('contain.text', 'Test User');
    cy.get('#email').should('contain.text', 'testuser@example.com');
    cy.get('#sex').should('contain.text', 'Male');
    cy.get('#birth').should('contain.text', '01/01/1990');

    cy.get('button').contains('Back to Posts').click();
    cy.url().should('include', '/main');

  });

  it('Logs out successfully', () => {
    // Натискання кнопки вийти
    cy.get('button').contains('Logout').click();

    // Перевірка переходу на сторінку "About"
    cy.url().should('include', '/about');

    // Перевірка очищення localStorage
    cy.window().its('localStorage.user').should('be.undefined');
  });
});
