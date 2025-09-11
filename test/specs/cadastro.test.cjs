class CadastroPage {
    // Seletores
    get btnSignUp() {
        return $('~Sign Up'); // botão de cadastro na tela inicial
    }

    get inputFirstName() {
        return $('id:firstName'); // ajuste conforme o resource-id real
    }

    get inputLastName() {
        return $('id:lastName');
    }

    get inputPhone() {
        return $('id:phone');
    }

    get inputEmail() {
        return $('id:email');
    }

    get inputPassword() {
        return $('id:password');
    }

    get btnSubmit() {
        return $('~Register'); // botão de enviar cadastro
    }

    // Método para preencher o formulário
    async fillForm({ firstName, lastName, phone, email, password }) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
    }

    // Método para submeter
    async submit() {
        await this.btnSubmit.click();
    }
}

export default new CadastroPage();
