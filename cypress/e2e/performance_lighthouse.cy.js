describe("Lighthouse Performance Metrics - Desktop and Mobile", () => {
  it("Captura métricas para Desktop y Mobile", () => {
    const url = Cypress.config("baseUrl");  // Obtiene la URL base desde el archivo de configuración
    const combinedResults = {};  // Objeto para almacenar los resultados combinados

    // Visitar la URL base antes de realizar las auditorías
    cy.visit(url);

    // Ejecutar pruebas para Desktop
    cy.runLighthouseForDevice("desktop").then((desktopResults) => {
      combinedResults.desktop = desktopResults.results;  // Guardar los resultados para Desktop

      // Ejecutar pruebas para Mobile
      cy.runLighthouseForDevice("mobile").then((mobileResults) => {
        combinedResults.mobile = mobileResults.results;  // Guardar los resultados para Mobile

        // Guardar los resultados combinados en un solo archivo JSON
        cy.writeFile("cypress/results/lighthouse_results.json", combinedResults);
      });
    });
  });
});
