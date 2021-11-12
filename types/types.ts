export interface New {
  title: string
  date: string
  description: string
  short_description: string
  photo: {
    url: string
  }
  id: number
}

export interface Calendar {
  title: string
  date: string
  description: string
  photo: {
    url: string
  }
  id: number
}

export interface Autoridad {
  position: string
  name: string
  id: number
}

export enum Page {
  Index = "index",
  Torneos = "torneos",
  Ranking = "ranking",
  Circuito = "circuito",
  TenisDeMesa = "tenisdemesa",
  Reglamentos = "reglamentos",
  Inscripcion = "inscripcion",
}

export interface Puntaje {
  posicion: number
  quinta: number
  cuarta: number
  tercera: number
  segunda: number
  primera: number
  SD: number
}

export interface PuntajeRating {
  diferencia: string
  jugadorPuntajeMayor: number
  jugadorPuntajeMenor: number
}

export interface CategoriaRating {
  categoria: string
  puntajeIngreso: number
  puntajeMinimo: number
  puntajeMaximo: number
}

export interface Categorias {
  categorias: CategoriaRating[]
}

export interface Pdf {
  name: string
  file: {
    url: string
    id: number
  }
  id: number
}

export interface Ranking {
  position: number
  name: string
  points: number
  id: number
}

export interface Rules {
  name: string
  rules: string[]
}

export interface Inscripto {
  dni: string
  nombre: string
  apellido: string
  email: string
  telefono: string
  provincia: string
  ciudad: string
  categoria: string
  comentario: string
  id: number
}

export interface Photo {
  id: number
  photo: {
    url: string
  }
}
