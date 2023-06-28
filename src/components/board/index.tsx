import { ContainerBoard } from '../../styles/board'
import Field from '../field'
import { useState, useEffect } from 'react'
import { fieldsType, posType } from '../types/field'
import ModalComp from '../modal'
import Header from '../header'
import { IPropsBoard } from '../types/board'

const Board = ({ lines, columns, bombs }: IPropsBoard) => {
  const [fields, setFields] = useState<fieldsType[]>([])
  const [usedFlags, setUsedFlags] = useState<number>(0)
  const [modalAttrs, setModalAttrs] = useState<{
    title: string
    status: boolean
  }>({
    title: '',
    status: false,
  })

  const fieldObjFactory = ({
    pos: { line, column },
    isMarked = false,
    isOpened = false,
    hasBomb = false,
    neighbors = [],
  }: fieldsType) => {
    return {
      pos: {
        line,
        column,
      },
      isMarked,
      isOpened,
      hasBomb,
      neighbors,
    }
  }

  const randomGeneratedBombs = (fields: fieldsType[]) => {
    let nBombs: number = 0

    while (true) {
      const randomPos = Math.floor(Math.random() * (lines * columns - 1))

      if (!fields[randomPos].hasBomb) {
        fields[randomPos].hasBomb = true
        nBombs++
      }

      if (nBombs === bombs) {
        break
      }
    }
  }

  useEffect(() => {
    if (fields.length === 0) {
      let new_arr: fieldsType[] = []
      for (let l = 0; l < lines; l++) {
        for (let c = 0; c < columns; c++) {
          new_arr.push(
            fieldObjFactory({ pos: { line: l, column: c }, neighbors: [] })
          )
        }
      }

      if (new_arr.length) {
        handleAddNeighbors(new_arr)
        randomGeneratedBombs(new_arr)
      }

      setFields(new_arr)
    }
  }, [fields])

  const compareFields = (
    field: fieldsType,
    fieldNeighbor: fieldsType
  ): boolean => {
    const pos =
      Math.abs(field.pos.line - fieldNeighbor.pos.line) +
      Math.abs(field.pos.column - fieldNeighbor.pos.column)

    if (
      field.pos.line === fieldNeighbor.pos.line ||
      field.pos.column === fieldNeighbor.pos.column
    ) {
      if (pos === 1) {
        return true
      }
      return false
    } else {
      if (pos === 2) {
        return true
      }
    }
    return false
  }
  const handleEndGame = (endType: number) => {
    setModalAttrs({
      title: endType === 1 ? 'Você Ganhou' : 'Você Perdeu',
      status: true,
    })
  }

  const handleAddNeighbors = (fields: fieldsType[]) => {
    if (fields.length) {
      fields.forEach((f1, f1Index) => {
        fields.forEach((f2) => {
          if (compareFields(f1, f2)) {
            fields[f1Index].neighbors.push(f2)
          }
        })
      })
    }
  }

  const openAllBombs = (fields: fieldsType[]) => {
    fields.map((field) => {
      if (field.hasBomb && !field.isMarked) {
        field.isOpened = true
      }
    })
  }

  const searchBombsNeighbors = (fieldsN: fieldsType[]) => {
    return fieldsN.every(({ hasBomb }) => hasBomb !== true)
  }

  const openFields = (fieldN: fieldsType, fields: fieldsType[]) => {
    if (fieldN.isOpened || fieldN.isMarked) {
      return
    }

    if (fieldN.hasBomb) {
      handleEndGame(2)
      openAllBombs(fields)
      return
    }

    const field = fields.find(
      ({ pos: { line, column } }) =>
        line === fieldN.pos.line && column === fieldN.pos.column
    )

    if (field) {
      field.isOpened = true
    }

    if (searchBombsNeighbors(fieldN.neighbors)) {
      fieldN.neighbors.forEach((f) => {
        openFields(f, fields)
      })
    }
  }

  const verifyWin = (fields: fieldsType[]) => {
    return fields
      .filter(({ hasBomb }) => hasBomb === false)
      .every(({ isOpened }) => isOpened === true)
  }

  const handleOpenField = ({ line, column }: posType) => {
    setFields((prev) => {
      const field = prev.find(
        ({ pos: { line: l, column: c } }) => l === line && c === column
      )

      if (field) {
        openFields(field, prev)
        if (verifyWin(prev)) {
          handleEndGame(1)
        }
      }

      return [...prev]
    })
  }

  const handleMarkField = ({ line, column }: posType) => {
    setFields((prev) => {
      const field = prev.find(
        ({ pos: { line: l, column: c } }) => l === line && c === column
      )

      if (field) {
        field.isMarked = !field.isMarked
        setUsedFlags((prev) => (field.isMarked ? prev + 1 : prev - 1))
      }

      return [...prev]
    })
  }

  const resetGame = () => {
    setModalAttrs({ title: '', status: false })
    setFields([])
    setUsedFlags(0)
  }

  return (
    <>
      <ModalComp
        isOpen={modalAttrs.status}
        modalText={modalAttrs.title}
        resetGame={resetGame}
      />
      <Header bombs={bombs} flags={usedFlags} />
      <ContainerBoard>
        {fields.map(
          (
            { pos: { line, column }, isOpened, isMarked, hasBomb, neighbors },
            index
          ) => (
            <Field
              key={index}
              line={line}
              column={column}
              isMarked={isMarked}
              isOpened={isOpened}
              hasBomb={hasBomb}
              neighbors={neighbors}
              openField={handleOpenField}
              markField={handleMarkField}
            />
          )
        )}
      </ContainerBoard>
    </>
  )
}

export default Board
