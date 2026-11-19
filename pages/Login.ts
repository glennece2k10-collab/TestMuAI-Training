import {Page, Locator} from '@playwright/test'

export class LoginProcess {
    readonly page:Page;
    readonly UsernameTest:Locator;
    readonly Password:Locator;
    readonly LogInButton:Locator;

    constructor (page:Page){
        this.page=page;
        this.UsernameTest=page.getByPlaceholder('Username');
        this.Password=page.getByPlaceholder('Password');
        this.LogInButton=page.getByRole('button', { name: 'Login' });
    }

    async logintest (username:string, password:string){
        await this.UsernameTest.fill(username);
        await this.Password.fill(password);
        await this.LogInButton.click();
    }

}