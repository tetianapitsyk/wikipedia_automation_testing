import { test as base } from '@playwright/test';
import { WikiHeader } from '../componentObject/WikiHeader';
import { MainMenuWP } from '../pageObgect/MainMenuWP';
import { CurrentEventsPage } from '../pageObgect/CurrentEventsPage';
import { ContactUsPage } from '../pageObgect/ContactUsPage';
import { SpecialPages } from '../pageObgect/SpecialPages';
import { PageWithContent } from '../pageObgect/PageWithContent';
import { SearchBlock } from '../pageObgect/SearchBlock';
import { PageInformation } from '../pageObgect/PageInformation';
import { WikiAppearance } from '../pageObgect/WikiAppearance';
import { LogInPage } from '../pageObgect/LogInPage';
import { ToolsDropdown } from '../pageObgect/ToolsDropdown';

type MyFixtures = {
  wikiHeader: WikiHeader;
  mainMenuWP: MainMenuWP;
  currentEventsPage: CurrentEventsPage;
  contactUsPage: ContactUsPage;
  specialPages: SpecialPages;
  pageWithContent: PageWithContent;
  searchBlock: SearchBlock;
  pageInformation: PageInformation;
  wikiAppearance: WikiAppearance;
  login: LogInPage;
  toolsDropdown: ToolsDropdown
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

  pageInformation: async ({ page }, use) => {
    await use(new PageInformation(page))
  },


  wikiAppearance: async({page}, use)=>{
    await use (new WikiAppearance(page))
  },

  login: async({page}, use)=>{
    await use (new LogInPage(page))
  },

  toolsDropdown: async({page}, use)=>{
    await use (new ToolsDropdown(page))
  }

});

export { expect } from '@playwright/test';