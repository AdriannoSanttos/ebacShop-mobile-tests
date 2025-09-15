import { $ } from '@wdio/globals';

class LoginPage {
    get email() { return $('android=new UiSelector().resourceId("email")'); }
    get password() { return $('android=new UiSelector().resourceId("password")'); }
    get btnLogin() { return $('~Login'); }
    get btnSignUp() { return $('android=new UiSelector().text("Sign up")'); }

    async login(email, password) {
        await this.email.waitForDisplayed({ timeout: 10000 });
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }

    async goToSignUp() {
        await this.btnSignUp.waitForDisplayed({ timeout: 10000 });
        await this.btnSignUp.click();
    }
}

export default new LoginPage();

