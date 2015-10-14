var request = require('supertest');

describe('routes', function() {

  var server;

  beforeEach(function() {
    server = require('../app.js');
  });

  afterEach(function() {
    server.close();
  });

  it('responds with "hello world!" /', function(done) {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, {"hello": "world!"}, done);
  });

});

