export interface IData {
  title: string
  body: string
  data: {
    qa: IQA[]
  }
}

export interface IQA {
  q: string
  a: string
}
