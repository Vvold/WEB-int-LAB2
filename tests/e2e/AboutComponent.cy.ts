/// <reference types="cypress" />

describe('About Page Tests', () => {
  beforeEach(() => {
    localStorage.setItem('loginInfo', JSON.stringify({ email: 'email', password: 'password' }))
    cy.visit('/about'); // замініть '/about' на правильний маршрут до цієї сторінки
  });

  it('should display the navbar with the correct elements', () => {
    cy.get('.navbar').should('be.visible');
    cy.get('.navbar .btn').contains('Back to Posts').should('be.visible');
    cy.get('.navbar-brand').should('be.visible');
    cy.get('.navbar .btn').contains('Profile').should('be.visible');
  });

  it('should navigate to the main page when "Back to Posts" is clicked', () => {
    cy.get('.btn').contains('Back to Posts').click();
    cy.url().should('include', '/main');
  });

  it('should navigate to the profile page when "Profile" is clicked', () => {
    cy.get('.btn').contains('Profile').click();
    cy.url().should('include', '/profile');
  });

  it('should display the About App card with the correct information', () => {
    cy.get('.about-app-card').should('be.visible');
    cy.get('.about-app-card .card-header').contains('ABOUT APP').should('be.visible');
    cy.get('.about-app-card .card-body').contains('Blog App').should('be.visible');
    cy.get('.about-app-card .card-body').contains('The user can:').should('be.visible');
    cy.get('.about-app-card ul').children().should('have.length', 3);
    cy.get('.about-app-card ul').children().eq(0).should('contain', 'add new post');
    cy.get('.about-app-card ul').children().eq(1).should('contain', 'remove and edit your own posts');
    cy.get('.about-app-card ul').children().eq(2).should('contain', 'comments posts');
  });
});
