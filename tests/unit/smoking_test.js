import assert from 'assert';
import path from 'path';
import {
  killApp,
  waitApp,
  openBrowser
} from '../../tool/lib/test-fns';
import { spawn } from '../../tool/lib/cp';

const startApp = (cwd, port) =>
  spawn('yarn', ['start', '--silent'], {
    cwd,
    env: { PORT: String(port) },
  });

describe('yarn start', () => {
  const port = 3033;
  const cwd = path.resolve(__dirname, '../..');
  const app = startApp(cwd, port);
  let browser;
  let page;

  beforeAll(async () => {
    await waitApp(port);
    [browser, page] = await openBrowser(port);
  }, 60 * 1000);

  afterAll(async () => {
    await browser.close();
    await killApp(app);
  });

  // it('launches the App', async () => {
  //   const expect = '用户画像';
  //   const actual = await page.$$eval('h1', es => es[0].textContent);
  //   assert.deepStrictEqual(actual, expect);
  // });
});
