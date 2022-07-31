
import { Builder, Capabilities, By, Browser } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true);
})

test('Clicking the Draw button displays the div with id = “choices"', async() => {
    await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.id('choices')).isDisplayed();
    expect(choices).toBe(true);
})

test('See All button shows up on homepage', async() => {
    const seeAllButton = await driver.findElement(By.id('see-all'))
    const displayed = await seeAllButton.isDisplayed()
    expect(displayed).toBe(true);
})