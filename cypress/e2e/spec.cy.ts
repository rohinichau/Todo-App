describe("Todo App testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="email"]').type("rohinich@gmail.com");
    cy.get('[data-cy="password"]').type("Welcome@2023");
    cy.get('[data-cy="signIn"]').click();
  });
  it('Test on homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.contains(/To-Do List App/ig)
  })

  it("Test createTask", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="createTask"]').click();
    cy.get('[data-cy="title"]').type("Test Task");
    cy.get('[data-cy="subTask"]').type("Sub Task 1");
    cy.get('[data-cy="description"]').type("Creating first test in cypress");
    cy.get('[data-cy="submit"]').click();
    cy.contains(/Test Task/gi);
    cy.contains(/Sub Task 1/gi);
    cy.contains(/Creating first test in cypress/gi);
  });



  it("Test adding subTask", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="createSubTask"]').first().click();
    cy.get('[data-cy="subTaskTitle"]').type("Sub Task 2");
    cy.get('[data-cy="subtaskSubmit"]').click();
    cy.contains(/Sub Task 2/gi);
   
  });

  it("Test deleting task", () => {
    cy.visit("http://localhost:3000/");
   cy.get('[data-cy="delete"]').first().click();
  });


   it("Test signOut", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="signOut"]').click();
    cy.url().should('contain', '/login')

  });
   
});
