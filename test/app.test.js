const request = require("supertest");
const app = require("../app");

describe("CI/CD Demo Application", () => {

    test("GET / should return success message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello from CI/CD Demo Application!");
    });

    test("GET /health should return UP", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });

});
