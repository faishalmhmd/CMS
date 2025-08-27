// tipe dasar
export interface IQA {
  q: string
  a: string
}

export interface IProduk {
  nama: string
  kategori: string
  harga: number
}

export interface ILayanan {
  nama: string
  deskripsi: string
}

export interface IKontak {
  telepon: string
  email: string
  alamat: string
}

// tipe utama
export interface IData {
  id: string
  title: string
  body: string
  description: string | null
  extension: string
  meta: {
    data: {
      qa: IQA[]
      produk: IProduk[]
      layanan: ILayanan[]
      kontak: IKontak
    }
    [key: string]: any // biar fleksibel kalo ada tambahan lain di meta
  }
  navigation: boolean
  path: string
  seo: {
    title: string
    description: string | null
  }
  stem: string
  __hash__: string
}
