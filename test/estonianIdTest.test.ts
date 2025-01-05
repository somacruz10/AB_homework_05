import { estonianIdGenerator} from '../src/IdGenerator'

describe('Estonian ID generation test', () => {
  test('Check country letters', () => {
    expect(estonianIdGenerator().startsWith('EST')).toBe(true)
  })
  test('Check ID length', () => {
    const expectedResult = 8
    const actualResult = estonianIdGenerator().length
    expect(actualResult).toBe(expectedResult)
  })
  test('Check ID length', () => {
    const iD = estonianIdGenerator()
    expect(/EST-\d{4}/.test(iD)).toBe(true)
  })
})
