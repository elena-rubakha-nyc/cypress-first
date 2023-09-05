describe("First test for santa", () => {
  beforeEach(() => {
    cy.visit("https://staging.lpitko.ru/");
  });
  it("First test", () => {
    cy.get(".header-home__animals").should("have.length", 1);
  });
});
