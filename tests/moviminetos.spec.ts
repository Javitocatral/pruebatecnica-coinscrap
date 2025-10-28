import { test, expect } from '@playwright/test'

test.describe('TransactionsList E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/movimientos')
  })

  test('Página carga correctamente con título', async ({ page }) => {
    await expect(page.locator('h2')).toHaveText('Movimientos bancarios')
  })

  test('Filtrado por categoría', async ({ page }) => {
    const select = page.locator('select[aria-label="Filtrar por categoría"]')
    await expect(select).toBeVisible()
    await select.selectOption({ label: 'Income' })

    const items = page.locator('ul[role="list"] li[role="listitem"]')
    await expect(items.first()).toBeVisible({ timeout: 10000 })

    const count = await items.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const categoryText = await items.nth(i).locator('p.text-sm').textContent()
      expect(categoryText).toContain('Income')
    }
  })
})
