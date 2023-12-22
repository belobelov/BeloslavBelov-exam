const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('http://localhost:8090/My-Grades');
    const form = await page.$('ul');
    expect(form).toBeTruthy();
  });
  