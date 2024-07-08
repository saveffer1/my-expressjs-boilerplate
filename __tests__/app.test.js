const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
    it("should respond with a 200 status", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});