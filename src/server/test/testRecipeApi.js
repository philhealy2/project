import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; // eslint-disable-line
// UNIT test begin
describe('Recipe API unit test', function() {
this.timeout(120000); // eslint-disable-line
// #1 return a collection of json documents
it('should return collection of JSON documents', function(done) {
  // calling home page api
  supertest(app)
  .get('/api/recipies')
  .expect('Content-type', /json/)
  .expect(200) // This is the HTTP response
  .end(function(err, res) {
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
  });
});
});
