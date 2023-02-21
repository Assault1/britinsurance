/// <reference types="cypress" />

const locators = require("../support/locator.json");
const validation = require("../support/validation.json");

const url = Cypress.env('base_url')
const view = Cypress.config('viewport')

import pageActions from "../support/pageAction";

var page = new pageActions();

describe('Brit Insurance Webpage Automation', () => {

  beforeEach(() => {
    cy.viewport(view.viewportWidth, view.viewportHeight)
    cy.visit(url)
    page.title().should('eq', 'Brit Insurance')
    page.getWebElement(locators.video).should('be.visible')
  }); 

  it('Verify search result shows three results', () => {
    page.getWebElement(locators.searchButton).should('be.visible').click()
    page.getWebElement(locators.searchBox).type("IFRS 17")
    page.getWebElement(locators.searchButtonActive).should('be.visible').click()
    cy.url().should('include', locators.searchUrl)
    page.getWebElement(locators.searchlist).should('have.length',locators.resultcount)
    page.getWebElement(locators.searchResultHeader).should(($lis) => {
      expect($lis).to.have.length(locators.resultcount)
      expect($lis.eq(0)).to.contain(validation.resultheader1)
      expect($lis.eq(1)).to.contain(validation.resultheader2)
      expect($lis.eq(2)).to.contain(validation.resultheader3)
    })
    page.getWebElement(locators.searchResultLink).should(($lis) => {
      expect($lis).to.have.length(locators.resultcount)
      expect($lis.eq(0)).to.have.contain(validation.resultsearchlink1)
      expect($lis.eq(1)).to.have.contain(validation.resultsearchlink2)
      expect($lis.eq(2)).to.have.contain(validation.resultsearchlink3)
    })
    page.getWebElement(locators.searchResultDesc).should(($lis) => {
      expect($lis).to.have.length(locators.resultcount)
      expect($lis.eq(0)).to.have.contain(validation.resultdesc1)
      expect($lis.eq(1)).to.have.contain(validation.resultdesc2)
      expect($lis.eq(2)).to.have.contain(validation.resultdesc3) 
    })
  })

  it('Verify contact us page have bermuda office address', () => {
    page.getWebElement(locators.megaMenu).click()
    page.getWebElement(locators.menu).should('be.visible')
    page.getWebElement(locators.contactUsMenu).scrollIntoView().should('be.visible').click()
    cy.url().should('include', locators.contactUrl)
    page.getWebElement(locators.city).contains(validation.city)
    page.getWebElement(locators.address).contains(validation.address1)
    page.getWebElement(locators.address).contains(validation.address2)
    page.getWebElement(locators.address).contains(validation.address3)
    page.getWebElement(locators.phone).should('have.attr', 'href').and('contain', validation.phone)
  })
})