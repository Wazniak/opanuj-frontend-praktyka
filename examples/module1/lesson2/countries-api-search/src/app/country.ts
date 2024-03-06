export interface Country {
  name: {
    common: string,
    official: string
  }
  flags: {
    png: string,
    svg: string,
    alt: string
  },
  capital: string,
  region: string,
  languages: { [key: string]: string },
  subregion: string,
  population: number,
  currencies: {
    [key: string]: {
      name: string,
      symbol: string
    }
  };
  area: number

}
