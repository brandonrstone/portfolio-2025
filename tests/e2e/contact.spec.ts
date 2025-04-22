import { test, expect } from '@playwright/test'

test('User can fill and submit contact form', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')
  await page.waitForSelector('#name') // 👈 ensures form is ready

  await page.fill('#name', 'Jane Doe')
  await page.fill('#email', 'jane@example.com')
  await page.fill('#message', 'Hi, I love your work!')

  await page.click('button[type="submit"]')

  await expect(page.getByText('Your message has been sent!')).toBeVisible()
})
