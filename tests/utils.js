import { expect } from "@playwright/test"

export function sidebarCreateEvaluateUrlsUnderNFTsContainerFn(baseURL) {
  return async ({ page}) => {
    await page.goto(baseURL)

    const urls = await page.evaluate(async () => {
      const container = document.evaluate('//div[text()="NFTs"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return Array.from(
        container?.parentElement?.parentElement?.querySelectorAll('a') ?? []
      ).map(a => a.getAttribute('href'))
    })

    expect(urls).toStrictEqual([
      '/marketplace',
      '/marketplace/collections',
      '/marketplace/user',
      '/marketplace/factory/info'
    ])
  }
}

export function sidebarCreateEvaluateUrlsUnderToolsContainerFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const urls = await page.evaluate(async () => {
      const container = document.evaluate('//div[text()="Tools"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return Array.from(
        container?.parentElement?.parentElement?.querySelectorAll('a') ?? []
      ).map(a => a.getAttribute('href'))
    })

    expect(urls).toStrictEqual([
      '/marketplace/tools/wrapper'
    ])
  }
}

export function sidebarCreateEvaluateUrlsUnderYieldContainerFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const urls = await page.evaluate(async () => {
      const container = document.evaluate('//div[text()="Yield"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return Array.from(
        container?.parentElement?.parentElement?.querySelectorAll('a') ?? []
      ).map(a => a.getAttribute('href'))
    })

    expect(urls).toStrictEqual([
      '/dashboard',
      '/farms',
      '/staking'
    ])
  }
}

export function sidebarCreateEvaluateUrlsUnderMoreContainerFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const urls = await page.evaluate(async () => {
      const container = document.evaluate('//div[text()="More"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return Array.from(
        container?.parentElement?.parentElement?.querySelectorAll('a') ?? []
      ).map(a => a.getAttribute('href'))
    })

    expect(urls).toStrictEqual([
      'https://paintswap.live',
      'https://exchange.paintswap.finance/#/pool',
      'https://docs.paintswap.finance',
      'https://github.com/PaintSwap'
    ])
  }
}

export function sidebarCreateEvaluateAuditedUrlFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const found = await page.evaluate(async () => {
      const element = document.evaluate('//a[@href="https://solidity.finance/audits/PaintSwap/"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return element !== null
    })

    expect(found).toBe(true)
  }
}

export function sidebarCreateEvaluateApiStatusUrlFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const found = await page.evaluate(async () => {
      const element = document.evaluate('//a[@href="https://thegraph.com/legacy-explorer/subgraph/paint-swap-finance/exchange"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return element !== null
    })

    expect(found).toBe(true)
  }
}

export function sidebarCreateEvaluateSocialUrlsFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const hrefs = [
      'https://twitter.com/paint_swap',
      'https://discord.com/invite/G4ZgtP52JK',
      'https://medium.com/paint-swap-finance',
      'https://www.reddit.com/r/paintswap/',
    ]

    const results = await page.evaluate(async (hrefs) => {
      const results = []
      for (const href of hrefs) {
        const element = document.evaluate(`//a[@href="${href}"]`, document, null, XPathResult.ANY_TYPE, null).iterateNext()
        results.push(
          element?.getAttribute('href')
        )
      }

      return results
    }, hrefs)

    expect(results).toStrictEqual(hrefs)
  }
}

export function navCreateEvaluateUrlsFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const texts = [
      'Marketplace',
      'Collections',
      'My NFTs',
      'Create',
    ]

    const results = await page.evaluate(async (texts) => {
      const results = []
      for (const text of texts) {
        const element = document.evaluate(`//div[text()="${text}"]`, document, null, XPathResult.ANY_TYPE, null).iterateNext()
        results.push(
          element?.parentElement.getAttribute('href')
        )
      }

      return results
    }, texts)

    expect(results).toStrictEqual([
      '/marketplace',
      '/marketplace/collections',
      '/marketplace/user',
      '/marketplace/factory/info',
    ])
  }
}

export function navCreateEvaluateBulkOfferUrlFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const found = await page.evaluate(async () => {
      const element = document.evaluate('//a[@href="/marketplace/bulk-offer"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return element !== null
    })

    expect(found).toBe(true)
  }
}

export function navCreateEvaluateCheckoutUrlFn(baseURL) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const found = await page.evaluate(async () => {
      const element = document.evaluate('//a[@href="/marketplace/checkout"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return element !== null
    })

    expect(found).toBe(true)
  }
}

export function marketplaceFactoryPageCreateEvaluateSubmenuUrls(baseURL, text) {
  return async ({ page }) => {
    await page.goto(baseURL)

    const urls = await page.evaluate(async (text) => {
      const element = document.evaluate(`//h1[text()="${text}"]`, document, null, XPathResult.ANY_TYPE, null).iterateNext()
      return Array.from(
        element.nextElementSibling.querySelectorAll('a') ?? []
      ).map(a => a.getAttribute('href'))
    }, text)

    expect(urls).toStrictEqual([
      '/marketplace/factory/info',
      '/marketplace/factory/contract',
      '/marketplace/factory/mint',
      '/marketplace/factory/collection',
    ])
  }
}
