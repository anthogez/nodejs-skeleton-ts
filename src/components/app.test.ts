import app from "./app";
import * as request from "supertest";

describe("Check if home page returns a text max length 35", () => {
  it("success", async () => {
    const response = await request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect("Content-Length", "35");
  });
});
