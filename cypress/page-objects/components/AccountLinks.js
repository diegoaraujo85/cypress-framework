export default class AccountLinks{
  static clickSummary(){
    cy.click('#account_summary_tab');
  }

  static clickActivity(){
    cy.click('#account_summary_tab');
  }

  static clickTransferFunds(){
    cy.click('#transfer_funds_tab');
  }

  static clickPayBills(){
    cy.click('#pay_bills_tab');
  }

  static clickMoneyApp(){
    cy.click('#money_app_tab');
  }

  static clickOnlineStatements(){
    cy.click('#online_statements_tab');
  }
}
