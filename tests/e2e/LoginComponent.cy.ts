/// <reference types="cypress" />

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login'); // замініть '/login' на правильний маршрут до вашої сторінки логіну
  });

  it('should display the login form', () => {
    cy.get('.form-block').should('be.visible');
    cy.get('h3').contains('Login').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('button').contains('Login').should('be.visible');
    cy.get('a').contains('Sign Up').should('be.visible');
  });

  it('should allow user to type in email and password', () => {
    cy.get('#email').type('test@example.com').should('have.value', 'test@example.com');
    cy.get('#password').type('password123').should('have.value', 'password123');
  });

  it('should store login info in localStorage and navigate to main page on login', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('button').contains('Login').click();

    cy.url().should('include', '/main');
    cy.window().then((window) => {
      const loginInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
      expect(loginInfo).to.have.property('email', 'test@example.com');
      expect(loginInfo).to.have.property('password', 'password123');
    });
  });

  it('should navigate to registration page on Sign Up button click', () => {
    cy.get('a').contains('Sign Up').click();
    cy.url().should('include', '/registration');
  });

  it('should display an error message for incorrect login', () => {
    cy.get('#email').type('wrong@example.com');
    cy.get('#password').type('wrongpassword');
    cy.get('button').contains('Login').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Error during login');
    });
  });
});
