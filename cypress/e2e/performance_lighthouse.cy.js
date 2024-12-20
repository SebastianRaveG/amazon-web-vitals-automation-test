describe("Auditoría con Lighthouse", () => {
  it("Audita el rendimiento en Desktop y Mobile", () => {
    // Umbrales para métricas en Desktop
    const thresholdsDesktop = {
      performance: 50,
      'first-contentful-paint': 3000,
      'largest-contentful-paint': 3000,
      'total-blocking-time': 200,
      'cumulative-layout-shift': 0.1,
      'speed-index': 3000,
    };

    // Umbrales para métricas en Mobile
    const thresholdsMobile = {
      performance: 50,
      'first-contentful-paint': 4000,
      'largest-contentful-paint': 4000,
      'total-blocking-time': 300,
      'cumulative-layout-shift': 0.2,
      'speed-index': 4000,
    };

    // Configuración para Desktop
    const configDesktop = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true }
    };

    // Configuración para Mobile
    const configMobile = {
      formFactor: 'mobile',
      screenEmulation: { disabled: true }
    };

    // Realizar la auditoría para Desktop
    cy.visit('/');
    cy.lighthouse(thresholdsDesktop, configDesktop).then((desktopReport) => {
      cy.log('Resultados Desktop:', desktopReport);  // Asegúrate de que esto muestre un informe válido
      if (desktopReport) {
        cy.writeFile('cypress/fixtures/lighthouse-desktop.json', desktopReport);
      } else {
        cy.log('No se generó el informe de Desktop');
      }
    });

    cy.lighthouse(thresholdsMobile, configMobile).then((mobileReport) => {
      cy.log('Resultados Mobile:', mobileReport);  // Asegúrate de que esto muestre un informe válido
      if (mobileReport) {
        cy.writeFile('cypress/fixtures/lighthouse-mobile.json', mobileReport);
      } else {
        cy.log('No se generó el informe de Mobile');
      }
    });
  });
});
