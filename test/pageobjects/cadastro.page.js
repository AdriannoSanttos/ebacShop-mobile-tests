import { $ } from '@wdio/globals';

class CadastroPage {
    get firstName() { return $('android=new UiSelector().resourceId("firstName")'); }
    get lastName() { return $('android=new UiSelector().resourceId("lastName")'); }
    get phone() { return $('android=new UiSelector().resourceId("phone")'); }
    get email() { return $('android=new UiSelector().resourceId("email")'); }
    get password() { return $('android=new UiSelector().resourceId("password")'); }
    get repassword() { return $('android=new UiSelector().resourceId("repassword")'); }
    get signUpText() { return $('android=new UiSelector().text("Sign up")'); }

    async fillSignupForm(user) {
        await this.firstName.waitForDisplayed({ timeout: 10000 });
        await this.firstName.setValue(user.firstName);
        await this.lastName.setValue(user.lastName);
        await this.phone.setValue(user.phone);
        await this.email.setValue(user.email);
        await this.password.setValue(user.password);
        await this.repassword.setValue(user.password);
    }

    async isSignupScreenDisplayed() {
        return await this.signUpText.waitForDisplayed({ timeout: 10000 });
    }
}

export default new CadastroPage();


