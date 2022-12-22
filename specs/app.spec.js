import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe ('nameIsValid', () => {
    it('checks name', () => {
        expect(nameIsValid('Jane')).toBeTruthy();
    })
    it('name not a number', () => {
        expect(nameIsValid(1)).toBeFalsy();
    })
    it('length name < 1 is not valid', () => {
        expect(nameIsValid('q')).toBeFalsy();
    })
    it('length name 2 is valid', () => {
        expect(nameIsValid('qa')).toBeTruthy();
    })
    it('name is not include whitespace', () => {
        expect(nameIsValid('some name')).toBeFalsy();
    })
})

describe ('fullTrim', () =>{
    it('is function', () => {
        expect(typeof fullTrim).toBe('function')
    })
    it('whitespace is triming', () => {
        expect(fullTrim('omg its working')).toBe('omgitsworking')
    })
    it('return string', () => {
        expect(typeof fullTrim('some text')).toBe('string')
    })

})

describe ('getTotal', () => {
    test.each([
        {items: [{price: 10, quantity: 1}], discount: 0, expected: 10},
        {items: [{price: 1, quantity: 10}], discount: 0, expected: 10},
        {items: [{price: 0, quantity: 10}], discount: 0, expected: 0},
        {items: [{price: 0, quantity: 10}], discount: 10, expected: 0},
        {items: [{price: 10, quantity: 10}], discount: 10, expected: 90},
        {items: [{price: 10, quantity: 10}], discount: -10, expected: 'error'},
        {items: [{price: 100, quantity: 1}], discount: 'string', expected: 'error'}
     ])('Total items {$items.0.price., $items.0.quantity} with discount $discount = $expected',({items, discount, expected}) => {
        if(expected === 'error'){
            expect(function () {
getTotal(items, discount)
            }).toThrow()
        } else{
            expect(getTotal(items, discount)).toBe(expected)
        }
     })

     test.each([
        {items: [{price: 10, quantity: 10}, {price: 2, quantity: 100}], discount: 0, expected: 300},
        {items: [{price: 10, quantity: 10}, {price: 10, quantity: 10}], discount: 50, expected: 100},
        {items: [{price: 10, quantity: 10}, {price: 0, quantity: 10}], discount: 0, expected: 100},
        {items: [{price: 0, quantity: 10}, {price: 1, quantity: 10}], discount: 50, expected: 5},
        {items: [{price: 10, quantity: 10}, {price: 10, quantity: 10}], discount: 100, expected: 0},
        {items: [{price: NaN, quantity: 10}, {price: 10, quantity: 10}], discount: 50, expected: NaN}
        ])('Total items {$items.0.price., $items.0.quantity}, {$items.1.price., $items.1.quantity} with discount $discount = $expected',({items, discount, expected}) => {
        expect(getTotal(items, discount)).toBe(expected)
     })
})