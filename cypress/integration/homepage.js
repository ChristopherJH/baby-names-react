describe("Renders the homepage", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get(".searchbar").should("exist");
  });
});
