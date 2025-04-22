# Test info

- Name: User can fill and submit contact form
- Location: /Users/brandonstone/Workspace/portfolio-2025/tests/e2e/contact.spec.ts:3:5

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#name') to be visible

    at /Users/brandonstone/Workspace/portfolio-2025/tests/e2e/contact.spec.ts:5:14
```

# Page snapshot

```yaml
- banner:
  - heading "Restaurant Website" [level=1]:
    - link "Restaurant Website":
      - /url: /
  - navigation:
    - button "Sign out"
- text: ContactPage
- alert
- button "Open Next.js Dev Tools":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |
   3 | test('User can fill and submit contact form', async ({ page }) => {
   4 |   await page.goto('http://localhost:3000/contact')
>  5 |   await page.waitForSelector('#name') // 👈 ensures form is ready
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
   6 |
   7 |   await page.fill('#name', 'Jane Doe')
   8 |   await page.fill('#email', 'jane@example.com')
   9 |   await page.fill('#message', 'Hi, I love your work!')
  10 |
  11 |   await page.click('button[type="submit"]')
  12 |
  13 |   await expect(page.getByText('Your message has been sent!')).toBeVisible()
  14 | })
  15 |
```