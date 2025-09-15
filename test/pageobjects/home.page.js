import { $ } from '@wdio/globals';

class HomePage {
    
    async openMenu(menu) {
        const tab = $(`id:tab-${menu}`);
        await tab.waitForDisplayed({ timeout: 10000 });
        await tab.click();
    }
}

export default new HomePage();


