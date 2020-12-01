import { get } from "../../../src/apis/Http";
import assert from 'assert';
import { report } from "../../../server/main";

describe("yarn start", () => {
  it("get data from baidu", async () => {
    let response = get("http://wwww.baidu.com");
    console.log(response.data);
  });
});
