import { test, expect } from '@playwright/test';
import { LoginProcess } from '../pages/Login'
 
const users = ['standard_user', 'visual_user'];
const password = 'secret_sauce';
 
for (const username of users) {
  test(`AddToCartE2E - ${username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login=new LoginProcess(page);
    await login.logintest(username, password);
    
    
    //await page.getByPlaceholder('Username').fill(username);
    //await page.getByPlaceholder('Password').fill(password);
    //await page.getByRole('button', { name: 'Login' }).click();
 
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
 
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.locator('[data-test="item-quantity"]')).toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
}
 