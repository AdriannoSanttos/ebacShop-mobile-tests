class CadastroPage {
    // Botão Sign up
    get btnSignUp() {
        return $('android=new UiSelector().text("Sign up")');
    }

    // Campos do formulário
    get firstName() {
        return $('android=new UiSelector().resourceId("firstName")');
    }

    get lastName() {
        return $('android=new UiSelector().resourceId("lastName")');
    }

    get phoneNumber() {
        return $('android=new UiSelector().resourceId("phone")');
    }

    get email() {
        return $('android=new UiSelector().resourceId("email")');
    }

    get password() {
        return $('android=new UiSelector().resourceId("password")');
    }

    get rePassword() {
        return $('android=new UiSelector().resourceId("repassword")');
    }

    // Método para preencher o formulário
    async fillForm({ firstName, lastName, phone, email, password }) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.phoneNumber.setValue(phone);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.rePassword.setValue(password);
    }

    // Método para enviar o formulário
    async submit() {
        await this.btnSignUp.click();
    }
}

export default new CadastroPage();

