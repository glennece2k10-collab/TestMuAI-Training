import {test, expect} from '@playwright/test';


    test ('TestMuAI Form Demo', async ({page}) =>{
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', {name: 'Input Form Submit'}).click();
    await expect (page).toHaveURL('https://www.testmuai.com/selenium-playground/input-form-demo/');
    await expect (page.getByRole('heading', {name: 'Form Demo'})).toBeVisible();
    await page.getByPlaceholder('Name').first().fill('Glenn');
    await page.getByPlaceholder('Email').first().fill('glennece2k10@gmail.com');
    await page.getByPlaceholder('Password').first().fill('no12alak');
    await page.getByRole('textbox', {name: 'Company'}).fill('Branchspace');
    await page.getByRole('textbox', {name: 'Website'}).fill('https://www.branchspace.com/');
    await page.getByRole('combobox').selectOption('PH');
    await page.getByPlaceholder('City').first().fill('Kawit');
    await page.getByPlaceholder('Address 1').first().fill('180');
    await page.getByPlaceholder('Address 2').first().fill('Marulas');
    await page.getByPlaceholder('State').first().fill('Cavite');
    await page.getByRole('textbox', {name: 'Zip code'}).fill('4104');
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', {name: 'Submit'}).click();
    const inputFormValidation = page.getByText('Thanks for contacting us, we will get back to you shortly.');
    await inputFormValidation.scrollIntoViewIfNeeded();
    await expect(inputFormValidation).toBeVisible();
});