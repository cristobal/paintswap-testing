// @ts-check
import { test } from '@playwright/test'
import {
  sidebarCreateEvaluateUrlsUnderNFTsContainerFn,
  sidebarCreateEvaluateUrlsUnderToolsContainerFn,
  sidebarCreateEvaluateUrlsUnderYieldContainerFn,
  sidebarCreateEvaluateUrlsUnderMoreContainerFn,
  sidebarCreateEvaluateAuditedUrlFn,
  sidebarCreateEvaluateApiStatusUrlFn,
  sidebarCreateEvaluateSocialUrlsFn,
  navCreateEvaluateUrlsFn,
  navCreateEvaluateBulkOfferUrlFn,
  navCreateEvaluateCheckoutUrlFn,
  marketplaceFactoryPageCreateEvaluateSubmenuUrls,
} from './utils.js'

const baseURL = 'https://paintswap-staging-pr-791.herokuapp.com/marketplace/factory/collection'

test('sidebar evaluate urls under nfts container', sidebarCreateEvaluateUrlsUnderNFTsContainerFn(baseURL))
test('sidebar evaluate urls under tools container', sidebarCreateEvaluateUrlsUnderToolsContainerFn(baseURL))
test('sidebar evaluate urls under yield container', sidebarCreateEvaluateUrlsUnderYieldContainerFn(baseURL))
test('sidebar evaluate urls under more container', sidebarCreateEvaluateUrlsUnderMoreContainerFn(baseURL))
test('sidebar evaluate audited url element', sidebarCreateEvaluateAuditedUrlFn(baseURL))
test('sidebar evaluate api status url element', sidebarCreateEvaluateApiStatusUrlFn(baseURL))
test('sidebar evaluate social urls elements', sidebarCreateEvaluateSocialUrlsFn(baseURL))
test('nav evaluate urls elements', navCreateEvaluateUrlsFn(baseURL))
test('nav evaluate bulk offer url element', navCreateEvaluateBulkOfferUrlFn(baseURL))
test('nav evaluate checkout url element', navCreateEvaluateCheckoutUrlFn(baseURL))
test('marketplace factory page evaluate urls under submenu container', marketplaceFactoryPageCreateEvaluateSubmenuUrls(baseURL, 'Submit Collection'))
