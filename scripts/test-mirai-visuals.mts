#!/usr/bin/env node

import puppeteer from "puppeteer"
import { existsSync, mkdirSync } from "fs"
import { join } from "path"

const TEST_URL = "http://localhost:3333/mirai-test"
const SCREENSHOTS_DIR = join(process.cwd(), "test-screenshots")
const VIEWPORT = { width: 1280, height: 800 }

async function captureScreenshots() {
  // Ensure screenshots directory exists
  if (!existsSync(SCREENSHOTS_DIR)) {
    mkdirSync(SCREENSHOTS_DIR, { recursive: true })
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport(VIEWPORT)

    // Test both light and dark themes
    for (const theme of ["light", "dark"]) {
      console.log(`Capturing ${theme} theme...`)

      // Go to test page
      await page.goto(TEST_URL, { waitUntil: "networkidle2" })

      // Set theme
      await page.evaluate((themeValue) => {
        document.documentElement.classList.toggle("dark", themeValue === "dark")
      }, theme)

      // Wait for theme to apply
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Capture buttons section specifically using evaluate and page context
      const buttonsSectionExists = await page.evaluate(() => {
        const sections = document.querySelectorAll('section')
        for (let i = 0; i < sections.length; i++) {
          const h2 = sections[i].querySelector('h2')
          if (h2 && h2.textContent?.includes('Buttons')) {
            sections[i].setAttribute('data-test-buttons', 'true')
            return true
          }
        }
        return false
      })
      
      if (buttonsSectionExists) {
        const buttonsSection = await page.$('[data-test-buttons="true"]')
        if (buttonsSection) {
          const screenshotPath = join(SCREENSHOTS_DIR, `mirai-buttons-${theme}.png`)
          await buttonsSection.screenshot({ path: screenshotPath })
          console.log(`Saved: ${screenshotPath}`)
        }
      }

      // Capture full page screenshot
      const fullPagePath = join(SCREENSHOTS_DIR, `mirai-components-${theme}.png`)
      await page.screenshot({
        path: fullPagePath,
        fullPage: true,
      })
      console.log(`Saved: ${fullPagePath}`)
      
      if (!buttonsSectionExists) {
        console.warn(`Could not find buttons section in ${theme} theme`)
      }
    }

  } catch (error) {
    console.error("Error capturing screenshots:", error)
    process.exit(1)
  } finally {
    await browser.close()
  }
}

// Run the script
console.log("Starting Mirai visual tests...")
console.log("Make sure the dev server is running on http://localhost:3333")
captureScreenshots()