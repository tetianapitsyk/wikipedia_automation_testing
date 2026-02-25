import { test as base } from '@playwright/test';
import { WikiHeader } from '../pageObgect/WikiHeader';
import { MainMenuWP } from '../pageObgect/MainMenuWP';
import { CurrentEventsPage } from '../pageObgect/CurrentEventsPage';
import { ContactUsPage } from '../pageObgect/ContactUsPage';
import { SpecialPages } from '../pageObgect/SpecialPages';
 
type MyFixtures = {
  wikiHeader: WikiHeader;
  mainMenuWP: MainMenuWP;
  currentEventsPage: CurrentEventsPage;
  contactUsPage: ContactUsPage;
  specialPages: SpecialPages;
};
 
export const test = base.extend<MyFixtures>({
  wikiHeader: async ({ page }, use) => {
    await use(new WikiHeader(page));
  },


mainMenuWP: async ({ page }, use) => {
    await use(new MainMenuWP(page));
  },


currentEventsPage: async ({ page }, use) => {
    await use(new CurrentEventsPage(page));
  },


contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },


  specialPages: async ({ page }, use) => {
    await use(new SpecialPages(page));
  },

 
  
});
 
export { expect } from '@playwright/test';