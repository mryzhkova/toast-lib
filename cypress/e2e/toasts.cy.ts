import dataCy from '@/constants/dataCy';

describe('Toasts', () => {
  it('successfully loads', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template');
  });
});

describe('Check toast remove', () => {
  it('should show successful toast and remove in 5 seconds', () => {
    cy.get(`[data-cy="${dataCy.showSucc}"]`).click();
    cy.get(`[data-cy=${dataCy.succ}]`).should('be.visible');
    cy.wait(5000);
    cy.get(`[data-cy=${dataCy.succ}]`).should('not.exist');
  });

  it('should show error toast and remove in 5 seconds', () => {
    cy.get(`[data-cy="${dataCy.showErr}"]`).click();
    cy.get(`[data-cy=${dataCy.err}]`).should('be.visible');
    cy.wait(5000);
    cy.get(`[data-cy=${dataCy.err}]`).should('not.exist');
  });

  it('should show info toast and remove in 5 seconds', () => {
    cy.get(`[data-cy="${dataCy.showInf}"]`).click();
    cy.get(`[data-cy=${dataCy.inf}]`).should('be.visible');
    cy.wait(5000);
    cy.get(`[data-cy=${dataCy.inf}]`).should('not.exist');
  });

  it('should show warning toast and remove in 5 seconds', () => {
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy=${dataCy.warn}]`).should('be.visible');
    cy.wait(5000);
    cy.get(`[data-cy=${dataCy.warn}]`).should('not.exist');
  });
});

describe('Check toast remove by click', () => {
  it('should show successful toast and removes', () => {
    cy.get(`[data-cy="${dataCy.showSucc}"]`).click();
    cy.get(`[data-cy=${dataCy.succ}]`).should('be.visible');
    cy.get(`[data-cy="${dataCy.closeBtn}"]`).click();
    cy.get(`[data-cy=${dataCy.succ}]`).should('not.exist');
  });

  it('should show error toast and remove', () => {
    cy.get(`[data-cy="${dataCy.showErr}"]`).click();
    cy.get(`[data-cy=${dataCy.err}]`).should('be.visible');
    cy.get(`[data-cy="${dataCy.closeBtn}"]`).click();
    cy.get(`[data-cy=${dataCy.err}]`).should('not.exist');
  });

  it('should show info toast and remove', () => {
    cy.get(`[data-cy="${dataCy.showInf}"]`).click();
    cy.get(`[data-cy=${dataCy.inf}]`).should('be.visible');
    cy.get(`[data-cy="${dataCy.closeBtn}"]`).click();
    cy.get(`[data-cy=${dataCy.inf}]`).should('not.exist');
  });

  it('should show warning toast and remove', () => {
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy=${dataCy.warn}]`).should('be.visible');
    cy.get(`[data-cy="${dataCy.closeBtn}"]`).click();
    cy.get(`[data-cy=${dataCy.warn}]`).should('not.exist');
  });
});

describe('Check toasts quantity', () => {
  it('should be 3 toasts', () => {
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy="${dataCy.showInf}"]`).click();
    cy.get(`[data-cy="${dataCy.showErr}"]`).click();
    cy.get(`[data-cy="${dataCy.showSucc}"]`).click();
    cy.get(`[data-cy=${dataCy.warn}]`).should('be.visible');
    cy.get(`[data-cy=${dataCy.inf}]`).should('be.visible');
    cy.get(`[data-cy=${dataCy.err}]`).should('be.visible');
    cy.get(`[data-cy=${dataCy.succ}]`).should('not.exist');
  });
});

describe('Check toast params', () => {
  it('should be margin 30px', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template&args=margins:30');
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy="${dataCy.toastWrap}"]`).should('have.css', 'margin', '30px');
  });

  it('should be color yellow', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template');
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy="${dataCy.warn}"]`).should('have.css', 'background-color', 'rgb(244, 224, 72)');
  });

  it('should be title Warnind example', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template');
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy="${dataCy.toastTitle}"]`).should('have.text', 'Warnind example');
  });

  it('should not be description', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template');
    cy.get(`[data-cy="${dataCy.showWarn}"]`).click();
    cy.get(`[data-cy="${dataCy.toastDesc}"]`).should('have.text', '');
  });

  it('should be title Custom example', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template');
    cy.get(`[data-cy="${dataCy.showCust}"]`).click();
    cy.get(`[data-cy="${dataCy.toastTitle}"]`).should('have.text', 'Custom example');
  });

  it('should be description Some description', () => {
    cy.visit('/iframe.html?viewMode=story&id=toast--template');
    cy.get(`[data-cy="${dataCy.showCust}"]`).click();
    cy.get(`[data-cy="${dataCy.toastDesc}"]`).should('have.text', 'Some description');
  });
});
