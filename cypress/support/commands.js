Cypress.Commands.add("runLighthouseForDevice", (formFactor) => {
    const thresholds = require("../fixtures/thresholds.json"); // Umbrales
    const results = {};

    return cy
        .lighthouse({
            formFactor: formFactor,
            screenEmulation: {
                mobile: formFactor === "mobile",
                disable: formFactor === "desktop", // Desktop no emula dispositivo
                width: Cypress.config(`${formFactor}Width`),
                height: Cypress.config(`${formFactor}Height`),
                deviceScaleRatio: 1,
            },
        })
        .then((lighthouseResults) => {
            // Función para calcular el estado según el umbral
            const calculateStatus = (value, expected) => {
                if (value <= expected) return "rápido";
                if (value <= expected * 1.2) return "moderado";
                return "lento";
            };

            // Procesar métricas
            results.performance = {
                score: lighthouseResults.categories.performance.score * 100,
                expected: thresholds.performance,
                status: calculateStatus(
                    lighthouseResults.categories.performance.score * 100,
                    thresholds.performance
                ),
            };

            results.metrics = {
                fcp: {
                    value: lighthouseResults.audits["first-contentful-paint"].numericValue,
                    expected: thresholds.fcp,
                    status: calculateStatus(
                        lighthouseResults.audits["first-contentful-paint"].numericValue,
                        thresholds.fcp
                    ),
                },
                lcp: {
                    value: lighthouseResults.audits["largest-contentful-paint"].numericValue,
                    expected: thresholds.lcp,
                    status: calculateStatus(
                        lighthouseResults.audits["largest-contentful-paint"].numericValue,
                        thresholds.lcp
                    ),
                },
                tbt: {
                    value: lighthouseResults.audits["total-blocking-time"].numericValue,
                    expected: thresholds.tbt,
                    status: calculateStatus(
                        lighthouseResults.audits["total-blocking-time"].numericValue,
                        thresholds.tbt
                    ),
                },
                si: {
                    value: lighthouseResults.audits["speed-index"].numericValue,
                    expected: thresholds.si,
                    status: calculateStatus(
                        lighthouseResults.audits["speed-index"].numericValue,
                        thresholds.si
                    ),
                },
                cls: {
                    value: lighthouseResults.audits["cumulative-layout-shift"].numericValue,
                    expected: thresholds.cls,
                    status: calculateStatus(
                        lighthouseResults.audits["cumulative-layout-shift"].numericValue,
                        thresholds.cls
                    ),
                },
            };

            return { formFactor, results };
        });
});
