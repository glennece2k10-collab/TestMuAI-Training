import { test, expect } from '@playwright/test';


test ('Drag & Drop', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', {name: 'Drag and Drop'}).click();
    await expect (page).toHaveURL('https://www.testmuai.com/selenium-playground/drag-and-drop-demo/');
    //await page
    const source = page.getByText('Draggable 1', {exact: true});
    const target = page.locator('#mydropzone');
    const s = await source.boundingBox();
    const t = await target.boundingBox();
    await page.waitForLoadState('networkidle');
    await page.mouse.move(s!.x + s!.width / 2, s!.y + s!.height / 2);
    await page.mouse.down();
    await page.mouse.move(t!.x + t!.width / 2, t!.y + t!.height / 2, { steps: 10 });
    await page.mouse.up();  

});

test ('Drag & Drop 2', async ({page}) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', {name: 'Drag and Drop'}).click();
    await expect (page).toHaveURL('https://www.testmuai.com/selenium-playground/drag-and-drop-demo/');
    await page.waitForLoadState('networkidle');
    const DropHere = page.getByText('Drag and Drop (Demo 2)');
    await DropHere.scrollIntoViewIfNeeded();
    await expect(DropHere).toBeVisible(); 
    await page.waitForLoadState('networkidle');
    test.setTimeout(50000);
    const source = page.getByText('Drag me to my target', {exact:true});
    const target = page.locator('#droppable');
    const s = await source.boundingBox();
    const t = await target.boundingBox();
    await page.waitForLoadState('networkidle');
    await page.mouse.move(s!.x + s!.width / 2, s!.y + s!.height / 2);
    await page.mouse.down();
    await page.mouse.move(t!.x + t!.width / 2, t!.y + t!.height / 2, { steps: 10 });
    //await page.mouse.up();  
    //await page.waitForLoadState('networkidle');
    await expect(page.getByText('Dropped').nth(1)).toBeVisible();
});