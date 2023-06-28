import { FieldContainer, FieldText, StatusNumber } from '../../styles/field'
import { BombIcon, FlagIcon } from '../../styles/icons'
import { IPropsField } from '../types/field'

const Field = ({
  hasBomb = false,
  line,
  column,
  isMarked = false,
  isOpened = false,
  neighbors = [],
  openField,
  markField,
}: IPropsField) => {
  const handleOpen = () => {
    if (!isMarked && !isOpened) {
      openField({ line, column })
    }
  }

  const handleMarked = () => {
    if (!isOpened) {
      markField({ line, column })
    }
  }

  const renderNumberBombs = () => {
    const n = neighbors.filter(({ hasBomb }) => hasBomb === true).length
    if (n) {
      return <StatusNumber n={n}>{n}</StatusNumber>
    }
    return ''
  }

  return (
    <FieldContainer
      isOpen={isOpened}
      onPress={handleOpen}
      delayLongPress={300}
      onLongPress={handleMarked}
    >
      <FieldText status={isMarked ? 'marked' : 'closed'}>
        <FlagIcon />
      </FieldText>
      <FieldText status={isOpened ? 'opened' : 'closed'}>
        {hasBomb ? <BombIcon /> : renderNumberBombs()}
      </FieldText>
    </FieldContainer>
  )
}

export default Field
