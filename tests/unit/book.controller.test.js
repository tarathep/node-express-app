const BookController = require("../../controllers/book.controller");
const httpMocks = require("node-mocks-http");
const DB = require("../../database/db");


jest.mock("../../database/db");
let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("BookController.getBooks", () => {
    it("should have a getTodos function", () => {
      expect(typeof BookController.getBooks).toBe("function");
    });

    it("should return response with status 200 and all books", async () => {
      const json = '[{"id":"8","name":"Book test"},{"id":"9","name":"Book test"}]';
      const obj = JSON.parse(json);
      DB.findAll.mockReturnValue(obj);
      await BookController.getBooks(req, res, next);
      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData()).toStrictEqual(obj);
    });
});

describe("BookController.getBookById", () => {
    it("should have a getBookById", () => {
        expect(typeof BookController.getBookById).toBe("function");
    });
    
    it("should return json body and response code 200", async () => {
        const json = '{"id":"5", "name":"Book x"}';
        const obj = JSON.parse(json);
        DB.findById.mockReturnValue(obj);
        await BookController.getBookById(req, res, next);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(obj);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should handle 404", async () => {
        DB.findById.mockReturnValue(null);
        await BookController.getBookById(req, res, next);
        expect(res.statusCode).toBe(404);
        expect(res._isEndCalled()).toBeTruthy();
    });
  });