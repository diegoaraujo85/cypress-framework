/// <reference types="cypress" />
import BasePage from "../BasePage";

export default class Feedback extends BasePage {
  static load() {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
  }

  static submitFeedback() {
    cy.fixture('feedback').then((data) => {
      const { name, email, subject, message } = data;
      cy.get('#name').invoke('val', name)
      cy.get('#email').type(email)
      cy.get('#subject').type(subject)
      cy.get('#comment').type(message)
      cy.contains('Send Message').click();
    })
  }
}
