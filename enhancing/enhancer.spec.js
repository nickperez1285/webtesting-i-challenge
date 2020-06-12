// const enhancer = require('./enhancer.js');
const {repair, succeed, fail}  = require('./enhancer.js');

// test away!
describe("enhancer.js", function() {
    describe("repair ", function() {
        it('should return 100', function() {
            const item = { 
                name:"Test",
                enhancement: 20,
                durability:3 
            };
            const expected = {
                name:"Test",
                enhancement: 20,
                durability:100
            };

            expect(repair(item)).toEqual(expected);
        })
    })
     describe("succeed", () => {
        it('enhancement increases by 1', () => {
            const item = {
                name: "Test",
                enhancement: 1,
                durability: 100
            }

            const expected = {
                name: "Test",
                enhancement: 2,
                durability: 100
            }

            expect(succeed(item)).toEqual(expected);
        })  
        it('enhancement max at 20 ', () => {
            const item = {
                name: "Test",
                enhancement: 20,
                durability: 100
            }

            const expected = {
                name: "Test",
                enhancement: 20 ,
                durability: 100
            }

            expect(succeed(item)).toEqual(expected);
        })    
         it('durability is unchanged ', () => {
            const item = {
                name: "Test",
                enhancement: 20,
                durability: 100
            }

            const expected = {
                name: "Test",
                enhancement: 20 ,
                durability: 100
            }

            expect(succeed(item)).toEqual(expected);
        })
    })
     describe("fails", () => {
        it(" durability decreased by 5 If the item's enhancement is less than 15", () => {
            const item = {
                name: "Test",
                enhancement: 10,
                durability: 100
            }

            const expected = {
                name: "Test",
                enhancement: 10,
                durability: 95
            }

            expect(fail(item)).toEqual(expected);
        })   
           it(" durability is decreased by 10, If the item's enhancement is 15 or more", () => {
            const item = {
                name: "Test",
                enhancement: 15,
                durability: 100
            }

            const expected = {
                name: "Test",
                enhancement: 15,
                durability: 90
            }

            expect(fail(item)).toEqual(expected);
        })   
           it("  the item's enhancement level is greater than 16, the enhancement level decreases by 1", () => {
            const item = {
                name: "Test",
                enhancement: 18,
                durability: 100
            }

            const expected = {
                name: "Test",
                enhancement: 17,
                durability: 90
            }

            expect(fail(item)).toEqual(expected);
        })  
    })  
})
