import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test('User can fill and submit contact form', async ({ page }) => {
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      })
    })

    await page.goto('/contact')
    await page.getByLabel('Name').fill('Jane Doe')
    await page.getByRole('textbox', { name: 'Email' }).fill('jane@example.com')
    await page.getByRole('textbox', { name: 'Message' }).fill('Hi, I love your work!')

    await page.getByRole('button', { name: /send message/i }).click()

    await expect(page.getByText('Your message has been sent!')).toBeVisible({ timeout: 10000 })
  })

  test('Form shows validation errors when required fields are missing', async ({ page }) => {
    await page.goto('/contact')

    await page.getByRole('button', { name: /send message/i }).click()

    // Assert validation errors appear
    await expect(page.getByText('Name is required')).toBeVisible()
    await expect(page.getByText('Email is required')).toBeVisible()
    await expect(page.getByText('Message is required')).toBeVisible()
  })

  test('User sees error when submitting form with invalid email', async ({ page }) => {
    await page.goto('/contact')

    // Same as before but with invalid email
    await page.getByLabel('Name').fill('Jane Doe')
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email')
    await page.getByRole('textbox', { name: 'Message' }).fill('Hi, I love your work!')

    await page.getByRole('button', { name: /send message/i }).click()

    await expect(page.getByText('Invalid email')).toBeVisible()
  })
})