import { test, expect} from '@playwright/test';


test ('Checkbox Demo - Individual Check', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', {name: 'Checkbox Demo'}).click();
    await page.getByRole('checkbox', { name: 'Click on check box' }).check();
    await page.getByText('Option').first().check();
    await expect (page.getByText('Checked!')).toBeVisible();

    const checkBoxDisabled3= page.getByText('Option').nth(2);
    const checkBoxDisabled4= page.getByText('Option').nth(3);
    await expect(checkBoxDisabled3).toBeDisabled();
    await expect(checkBoxDisabled4).toBeDisabled();

    await page.locator('input[name="option1"]').check();
    await page.locator('input[name="option2"]').check();
    await page.locator('input[name="option3"]').check();
    await page.locator('input[name="option4"]').check();

    //await page.waitForFunction('networkIdle');

});

test ('Checkbox Demo - Check All', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', {name: 'Checkbox Demo'}).click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Check All' }).click();
    await expect (page.getByRole('button', { name: 'Uncheck All' })).toBeVisible();
});