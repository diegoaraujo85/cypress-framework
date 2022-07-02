import { url, login_password, login_username } from "../../../config";
import Navbar from "../../page-objects/components/Navbar";
import LoginPage from "../../page-objects/pages/LoginPage";

describe('Login Failed test', () => {
  before(() => {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('should try to login with invalid credentials', () => {
    LoginPage.login('invalid username', 'invalid password');
  });

  it('should display the error message', () => {
    LoginPage.displayErrorMessage();
  });
});

describe('Login Success test', () => {
  before(() => {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('should login with valid credentials', () => {
    LoginPage.login(login_username, login_password);
  });

  it('should logout from application', () => {
    Navbar.logout()
    Navbar.displaySignInButton();
  });
});
