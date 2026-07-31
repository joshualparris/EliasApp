import { test, expect } from '@playwright/test';

test('homepage loads and shows EliasApp sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'EliasApp' })).toBeVisible();
  await expect(page.getByText('Garbage Trucks')).toBeVisible();
  await expect(page.getByText('Construction')).toBeVisible();
});

test('can navigate to Garbage Trucks and interact', async ({ page }) => {
  await page.goto('/');
  await page.locator('text=Garbage Trucks').click();
  
  await expect(page.getByRole('heading', { name: 'Garbage Trucks' })).toBeVisible();
  await expect(page.getByText('Garbage trucks help keep our streets clean.')).toBeVisible();
  
  // Test basic interaction
  await page.getByRole('button', { name: 'Lift the bin' }).click();
  // Ensure the truck body is visible
  await expect(page.getByText('🚛').first()).toBeVisible();
});
