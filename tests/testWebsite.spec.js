import { test, expect } from "@playwright/test";
test.only("Website Testing", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle(
    "Bas | Lead UI Engineer | React Frontend Developer",
  );
  await page.locator("nav").getByText("About").click();
});
