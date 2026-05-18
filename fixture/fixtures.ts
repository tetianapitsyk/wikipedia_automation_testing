import { test as base } from '@playwright/test';
import { MainMenu } from '../pageObgect/MainMenu';
import { CurrentEventsPage } from '../pageObgect/CurrentEventsPage';
import { ContactUsPage } from '../pageObgect/ContactUsPage';
import { SpecialPages } from '../pageObgect/SpecialPages';
import { PageWithContent } from '../pageObgect/PageWithContent';
import { SearchBlock } from '../pageObgect/SearchBlock';
import { PageInformation } from '../pageObgect/PageInformation';
import { LogInPage } from '../pageObgect/LogInPage';
import { BasicPage } from "../compositeObject/BasicPage"

type MyFixtures = {
  mainMenu: MainMenu;
  currentEventsPage: CurrentEventsPage;
  contactUsPage: ContactUsPage;
  specialPages: SpecialPages;
  pageWithContent: PageWithContent;
  searchBlock: SearchBlock;
  pageInformation: PageInformation;
  login: LogInPage;
  basicPage: BasicPage
};

//lang capabilities of playwrighth
export const test = base.extend<MyFixtures>({
    mainMenu: async ({ page }, use) => {
    await use(new MainMenu(page));
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
  login: async({page}, use)=>{
    await use (new LogInPage(page))
  },
  //  basicPage: async({page}, use)=>{
  //    await use (new BasicPage(page))
  //  }
});

export { expect } from '@playwright/test';