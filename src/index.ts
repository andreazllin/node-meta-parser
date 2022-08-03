type Person = {
  name: string
  fam: string
}

export const helloWorld = (person: Person): void => {
  console.log(`Hello ${person.name} ${person.fam}`)
}