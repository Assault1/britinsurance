/// <reference types="cypress" />

class pageActions {

    title() {
       return cy.title()
    }
  
    getWebElement(locator){
        return cy.get(locator)
    }
}

export default pageActions;