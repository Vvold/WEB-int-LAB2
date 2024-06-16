/// <reference types="cypress" />

describe('Blog App', () => {
  beforeEach(() => {
    localStorage.setItem('loginInfo', JSON.stringify({ email: 'email', password: 'password' }))
    // Замість cy.visit('/'), вставте правильний шлях до вашої сторінки
    cy.visit('/main');
  });

  it('should open the modal to add a post', () => {
    cy.get('.add-btn').click();
    cy.wait(4000)
    cy.get('.modal-content').should('be.visible');
    cy.get('h5').should('have.text', 'Add post');
  });

  it('should add a new post', () => {
    cy.get('.add-btn').click();
    cy.get('textarea[name="title"]').type('Test Post Title');
    cy.get('textarea[name="description"]').type('Test Post Description');
    cy.get('.btn-dark').click();

    cy.get('.card-header').should('contain', 'Test Post Title');
    cy.get('.card-text').should('contain', 'Test Post Description');
  });

  it('should edit an existing post', () => {
    cy.get('.add-btn').click();
    cy.get('textarea[name="title"]').type('Test Post Title');
    cy.get('textarea[name="description"]').type('Test Post Description');
    cy.get('.btn-dark').click();

    cy.get('.button').first().click(); // Нажимаем на кнопку редактирования
    cy.get('textarea[name="title"]').clear().type('Updated Post Title');
    cy.get('.btn-dark').click();

    cy.get('.card-header').should('contain', 'Updated Post Title');
  });

  it('should delete a post', () => {
    cy.get('.add-btn').click();
    cy.get('textarea[name="title"]').type('Test Post Title');
    cy.get('textarea[name="description"]').type('Test Post Description');
    cy.get('.btn-dark').click();

    cy.get('.remove-btn').first().click();
    cy.get('.card-header').should('not.exist');
  });

  it('should add a comment to a post', () => {
    cy.get('.add-btn').click();
    cy.get('textarea[name="title"]').type('Test Post Title');
    cy.get('textarea[name="description"]').type('Test Post Description');
    cy.get('.btn-dark').click();

    cy.get('.input-group input').type('Test Comment');
    cy.get('.input-group button').click();

    cy.get('.comments .card-text').should('contain', 'Test Comment');
  });

  it('should delete a comment', () => {
    cy.get('.add-btn').click();
    cy.get('textarea[name="title"]').type('Test Post Title');
    cy.get('textarea[name="description"]').type('Test Post Description');
    cy.get('.btn-dark').click();

    cy.get('.input-group input').type('Test Comment');
    cy.get('.input-group button').click();

    cy.get('.delete-comment-btn').click();
    cy.get('.comments .card-text').should('not.exist');
  });
});
