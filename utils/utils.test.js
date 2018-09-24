const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 5, (sum) => {
        expect(sum).toBe(8).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    let res = utils.square(11);

    expect(res).toBe(121).toBeA('number');
    // if (res !== 121) {
    //     throw new Error(`Expected 121, but got ${res}`);
    // }
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
    });

});

it ('should verify first and last names are set', () => {
    let res = utils.setName({age: 2, location: 'Philadelphia'},'Aditya Patwa');

    expect(res).toInclude({
        firstName: 'Aditya',
        lastName: 'Patwa'
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect*{name: 'Andrew'}.toNotEqual({name: 'Andrew'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toExclude({
//         age: 23
//     });
// });
