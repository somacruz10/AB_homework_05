import { latvianIdGenerator} from '../src/IdGenerator'

describe('Latvian ID generation test', () => {
  test('Check country letters', () => {
    expect(latvianIdGenerator().startsWith('LVA')).toBe(true)
  })
  test('Check ID length', () => {
    const expectedResult = 8
    const actualResult = latvianIdGenerator().length
    expect(actualResult).toBe(expectedResult)
  })
  test('Check ID length', () => {
    const iD = latvianIdGenerator()
    expect(/LVA-\d{4}/.test(iD)).toBe(true)
  })
})
