import { test, expect} from '@playwright/test';

const nameLeft = ['Kedungjenar','Danville','Mynamaki'];
const nameRight = ['Milan','Ngodo','Grange'];

test ('BootstrapDualList-LeftToRight', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground');
    await page.getByRole('link', {name: 'Bootstrap List Box'}).click();
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/bootstrap-dual-list-box-demo/');
    await page.getByRole('textbox', {name: 'search'}).first().fill('Danville');
    await page.waitForLoadState('networkidle');
    const left = page.locator('.dual-list.list-left');
    await expect(left.locator('.list-group-item')).toHaveText(nameLeft);
    await page.getByText('Danville').click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', {name:'>'}).nth(1).click();
    await page.getByText('Danville').click();
    const right = page.locator('.dual-list.list-right');
    await expect(right.locator('.list-group-item')).toHaveCount(4);
    await page.getByText('Milan').click();
    await page.locator('button').filter({hasText:/^>$/}).click();
    
    //await expect(right.locator('.list-group-item')).toHaveCount(4);
});

test ('BootstrapDualList-AllLeftToRight', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground');
    await page.getByRole('link', {name: 'Bootstrap List Box'}).click();
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/bootstrap-dual-list-box-demo/');
    //await page.getByRole('textbox', {name: 'search'}).first().fill('Danville');
    await page.waitForLoadState('networkidle');
    await page.getByText('All').nth(3).click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', {name:'>'}).nth(1).click();
    const right = page.locator('.dual-list.list-right');
    await expect(right.locator('.list-group-item')).toHaveCount(6);
    const left = page.locator('.dual-list.list-left');
    await expect(left.locator('.list-group-item')).toHaveCount(0);
});

test ('BootstrapDualList-AllRightToLeft', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground');
    await page.getByRole('link', {name: 'Bootstrap List Box'}).click();
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/bootstrap-dual-list-box-demo/');
    //await page.getByRole('textbox', {name: 'search'}).first().fill('Danville');
    await page.waitForLoadState('networkidle');
    await page.getByText('All').nth(4).click();
    await page.waitForLoadState('networkidle');
    await page.locator('button').filter({hasText:/^>$/}).click();
    const left = page.locator('.dual-list.list-left');
    await expect(left.locator('.list-group-item')).toHaveCount(6);
    const right = page.locator('.dual-list.list-right');
    await expect(right.locator('.list-group-item')).toHaveCount(0);

});

