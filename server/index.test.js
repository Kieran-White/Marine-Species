const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index.js'); // Replace with your actual file path

// Connect to MongoDB before running any tests
beforeAll(async () => {
    await mongoose.connect('mongodb://connorearneybs3221:IwT3a5xY75iviD3407DWDJBUPzcMYZPyCK6rdkSvhPPKnnkNDdHKNh9aVVwScgnBz6Es4EfTr1pxACDbg8AbXw==@connorearneybs3221.mongo.cosmos.azure.com:10255/universitywork?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@connorearneybs3221@');
});

// Close MongoDB connection after all tests have completed
afterAll(async () => {
    await mongoose.connection.close();
});

// Test MongoDB connection
describe('MongoDB connection', () => {
    it('should connect to MongoDB successfully', () => {
        expect(mongoose.connection.readyState).toBe(2);
    });
});

// Test search route
describe('GET /api/search/:q', () => {
    it('should return species matching the search query', async () => {
        const response = await request(app).get('/api/search/hawksbill'); // Replace 'hawksbill' with a valid search query
        expect(response.status).toBe(200);
        expect(response.body.results.length).toBeGreaterThan(0);
    });

    it('should return empty result if search query is invalid', async () => {
        const response = await request(app).get('/api/search/$invalid_query');
        expect(response.status).toBe(200); // Expect status code 200
        expect(response.body.results.length).toBe(0); // Expect results array to be empty
    });
});
