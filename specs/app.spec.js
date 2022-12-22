import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

// describe ('nameIsValid', () => {
//     it('checks name', () => {
//         expect(nameIsValid('name')).toBe(true);
//     })
//     it('name not a number', () => {
//         expect(nameIsValid(1)).toBe(false);
//     })
//     it('name length < 1 is not valid', () => {
//         expect(nameIsValid('1')).toBe(false);
//     })
//     it('name does not include whitespace', () => {
//         expect(nameIsValid('some name')).toBe(false);
//     })
// })

// describe ('fullTrim', () =>{
//     it('is function', () => {
//         expect(typeof fullTrim).toBe('function')
//     })
//     it('whitespace is triming', () => {
//         expect(fullTrim('omg its working')).toBe('omgitsworking')
//     })
//     it('return string', () => {
//         expect(typeof fullTrim('some text')).toBe('string')
//     })

// })

describe ('getTotal', () => {
    test.each([
        {items: [10, 10], expected: 100},
        {items: [10, 1], expected: 10},
        {items: [10, 1, 10, 9], expected: 100},
        {items: [10, 1, 10, 9], expected: 100}
     ])('getTotal($items)',({items, expected}) => {
        expect(getTotal(items)).toBe(expected)
     })
})