import { test as base } from '@playwright/test';
import { WikiHeader } from '../pageObgect/WikiHeader';
import { MainMenuWP } from '../pageObgect/MainMenuWP';
import { CurrentEventsPage } from '../pageObgect/CurrentEventsPage';
import { ContactUsPage } from '../pageObgect/ContactUsPage';
import { SpecialPages } from '../pageObgect/SpecialPages';
import { PageWithContent } from '../pageObgect/PageWithContent';
import { SearchBlock } from '../pageObgect/SearchBlock';
import { Tools } from '../pageObgect/Tools';
import { WikiAppearance } from '../pageObgect/WikiAppearance';

type MyFixtures = {
  wikiHeader: WikiHeader;
  mainMenuWP: MainMenuWP;
  currentEventsPage: CurrentEventsPage;
  contactUsPage: ContactUsPage;
  specialPages: SpecialPages;
  pageWithContent: PageWithContent;
  searchBlock: SearchBlock;
  tools: Tools;
  wikiAppearance: WikiAppearance;
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

  pageWithContent: async ({ page }, use) => {
    await use(new PageWithContent(page));
  },

  searchBlock: async ({ page }, use) => {
    await use(new SearchBlock(page))
  },

  tools: async ({ page }, use) => {
    await use(new Tools(page))
  },


  wikiAppearance: async({page}, use)=>{
    await use (new WikiAppearance(page))
  }

});

export { expect } from '@playwright/test';