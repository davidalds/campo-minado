export type posType = {
  line: number
  column: number
}

export type fieldsType = {
  pos: posType
  isOpened?: boolean
  isMarked?: boolean
  hasBomb?: boolean
  neighbors: fieldsType[]
}

export interface IPropsField {
  line: number
  column: number
  hasBomb?: boolean
  isOpened?: boolean
  isMarked?: boolean
  neighbors: fieldsType[]
  openField(pos: posType): void
  markField(pos: posType): void
}
