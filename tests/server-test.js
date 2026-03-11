const request = require("supertest");
const app = require("./server");

describe("API Tests", () => {

    test("Home route should return 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    test("Health route should return 200", async () => {
        const response = await request(app).get("/health");
        expect(response.statusCode).toBe(200);
    });

    test("Health route body", async () => {
        const response = await request(app).get("/health");
        expect(response.text).toBe("Server is up and running");
    });

}); 