import { lithuanianIdGenerator} from '../src/IdGenerator'

describe('Lithuanian ID generation test', () => {
  test('Check country letters', () => {
    expect(lithuanianIdGenerator().startsWith('LTU')).toBe(true)
  })
  test('Check ID length', () => {
    const expectedResult = 8
    const actualResult = lithuanianIdGenerator().length
    expect(actualResult).toBe(expectedResult)
  })
  test('Check ID length', () => {
    const iD = lithuanianIdGenerator()
    expect(/LTU-\d{4}/.test(iD)).toBe(true)
  })
})
