/// <reference types="cypress" />

const locators = require("../support/locator.json");
const testdata = require("../fixtures/example.json");

const url = Cypress.env('base_url')
const view = Cypress.config('viewport')

import pageActions from "../support/pageAction";

var page = new pageActions();

describe('Brit Insurance Webpage Automation', () => {

  beforeEach(() => {
    cy.viewport(view.viewportWidth, view.viewportHeight)
    cy.visit(url)
  }); 

  it('Verify search result shows three results', () => {
    page.title().should('eq', 'Brit Insurance')
    page.getWebElement(locators.video).should('be.visible')
    page.getWebElement(locators.searchButton).should('be.visible').click()
    page.getWebElement(locators.searchBox).type("IFRS 17")
    page.getWebElement(locators.searchButtonActive).should('be.visible').click()
    cy.url().should('include', locators.searchUrl)
    page.getWebElement(locators.searchlist).should('have.length',locators.resultcount)
    page.getWebElement(locators.searchResultHeader).should(($lis) => {
      expect($lis).to.have.length(locators.resultcount)
      expect($lis.eq(0)).to.contain('News')
      expect($lis.eq(1)).to.contain('Culture')
      expect($lis.eq(2)).to.contain('Culture')
    })
    page.getWebElement(locators.searchResultLink).should(($lis) => {
      expect($lis).to.have.length(locators.resultcount)
      expect($lis.eq(0)).to.have.contain('Interim results for the six months ended 30 June 2022')
      expect($lis.eq(1)).to.have.contain('Gavin Wilkinson')
      expect($lis.eq(2)).to.have.contain('John King')
    })
    page.getWebElement(locators.searchResultDesc).should(($lis) => {
      expect($lis).to.have.length(locators.resultcount)
      expect($lis.eq(0)).to.have.contain('A strong underwriting performance and significant growth.')
      expect($lis.eq(1)).to.have.contain('Group Chief Financial Officer')
      expect($lis.eq(2)).to.have.contain('Group Executive Underwriter') 
    })
  })

  it('Verify search result shows three results', () => {
    page.title().should('eq', 'Brit Insurance')
    page.getWebElement(locators.video).should('be.visible')
    page.getWebElement(locators.megaMenu).click()
    page.getWebElement(locators.menu).should('be.visible')
    page.getWebElement(locators.contactUsMenu).scrollIntoView().should('be.visible').click()
    cy.url().should('include', '/contact')
    page.getWebElement(locators.city).contains('Pembroke')
    page.getWebElement(locators.address).contains('Ground Floor, Chesney House')
    page.getWebElement(locators.address).contains('The Waterfront, 96 Pitts Bay Road, ')
    page.getWebElement(locators.address).contains('Pembroke, Hamilton HM 08, Bermuda')
    page.getWebElement(locators.phone).should('have.attr', 'href').and('contain', '+1 441 278 0660')
    
  })
})