export interface Animal {
  id: number,
  slug: string,
  name: string,
  value: number,
  active: number[],
  northern: number[],
  southern: number[],
  domain: string,
  location: string,
  northernLiteral: string,
  southernLiteral: string,
  activeLiteral: string,
  size?: string
}
