import { thresholdsDesktop, thresholdsMobile, configDesktop, configMobile } from '../fixtures/lighthouse-thresholds';

describe("Auditoría con Lighthouse", () => {
  const generateReport = (thresholds, config, deviceType) => {
    cy.lighthouse(thresholds, config).then((report) => {
      cy.log(`Resultados ${deviceType}:`, report);
      if (report) {
        cy.writeFile(`cypress/fixtures/lighthouse-${deviceType.toLowerCase()}.json`, report);
      } else {
        cy.log(`No se generó el informe de ${deviceType}`);
      }
    });
  };

  it("Audita el rendimiento en Desktop y Mobile", () => {

    cy.visit('/');
    generateReport(thresholdsDesktop, configDesktop, 'Desktop');

    generateReport(thresholdsMobile, configMobile, 'Mobile');
  });
});
