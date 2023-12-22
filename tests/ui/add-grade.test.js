const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://beloslavbelov-exam-3pxd.onrender.com/My-Grades');
    const form = await page.$('ul');
    expect(form).toBeTruthy();
  });
  
