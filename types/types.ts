export interface New {
  title: string
  date: string
  description: string
  photo: string
}

export interface Calendar {
  title: string
  date: string
  description: string
  photo: string
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
