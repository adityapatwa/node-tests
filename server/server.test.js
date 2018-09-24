const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

it('should return 404', (done) => {
   request(app)
       .get('/')
       .expect((res) => {
           expect(res.body).toInclude({
               error: 'Page not found'
           })
       })
       .end(done);
});

it('should expect my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({name: 'Aditya', age: 26})
        })
        .end(done);
});