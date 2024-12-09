import Counter from './Counter.vue';

describe('Counter', () => {
  it('should increment the counter', () => {
    cy.mount(Counter);
    cy.get('[data-test-id="count"]').should('have.text', '0');
    cy.get('[data-test-id="increment-button"]').click();
    cy.get('[data-test-id="count"]').should('have.text', '1');
  });
});
