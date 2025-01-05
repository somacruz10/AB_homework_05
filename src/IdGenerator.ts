export function IdGenerator(codeName: string): string {
  let randomNumber: number = Math.floor(1000 + Math.random() * 9000)
  return codeName + '-' + randomNumber
}

export function estonianIdGenerator(): string {
  return IdGenerator('EST')
}

export function latvianIdGenerator(): string {
  return IdGenerator('LVA')
}

export function lithuanianIdGenerator(): string {
  return IdGenerator('LTU')
}
