import { $ } from '@wdio/globals'

class ProfilePage {

    profileName(name) {
        const element = $(`//android.widget.TextView[@text="${name}"]`)
        element.waitForExist({
            timeout: 5000,
            timeoutMsg: `O nome ${name} não apareceu na tela`
        })
        return element
    }

    goToSignup() {
        const signupButton = $('~Sign Up') // ou outro seletor do botão de cadastro
        signupButton.waitForExist({ timeout: 5000 })
        signupButton.click()
    }

}

export default new ProfilePage()

