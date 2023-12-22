const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('https://beloslavbelov-exam-3pxd.onrender.com');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  
