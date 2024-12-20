describe("Lighthouse", () => {
  it("Test de Lighthouse", () => {
    const thresholdsDektop = {
      performance: 10,
      'first-contentful-paint': 11800,
      'largest-contentful-paint': 12500,
      'total-blocking-time': 11200,
      'cumulative-layout-shift': 0.1,
      'speed-index': 13400,
    };

    const thresholdsMobile = {
      performance: 10,
      'first-contentful-paint': 8000,
      'largest-contentful-paint': 10000,
      'total-blocking-time': 4000,
      'cumulative-layout-shift': 0.2,
      'speed-index': 12000,
    };

    const lighthouseConfigDesktop = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true }
    };

    const lighthouseConfigMobile = {
      formFactor: 'mobile',
      screenEmulation: { disabled: true }
    };

    // Visita la página
    cy.visit('/');

    // Ejecutar Lighthouse para Desktop
    cy.lighthouse(thresholdsDektop, lighthouseConfigDesktop).then((desktopResults) => {
      cy.log("Desktop Results", JSON.stringify(desktopResults));
      cy.writeFile('cypress/fixtures/metrics-desktop.json', desktopResults);
    });

    // Ejecutar Lighthouse para Mobile
    cy.lighthouse(thresholdsMobile, lighthouseConfigMobile).then((mobileResults) => {
      cy.log("Mobile Results", JSON.stringify(mobileResults));
      cy.writeFile('cypress/fixtures/metrics-mobile.json', mobileResults);
    });
  });
});
