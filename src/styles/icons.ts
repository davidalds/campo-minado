import { FontAwesome as FontAwesomeIcon } from '@expo/vector-icons'
import { styled } from 'styled-components/native'

export const BombIcon = styled(FontAwesomeIcon).attrs({
  name: 'bomb',
})<{ name?: string }>`
  font-size: 30px;
`

export const FlagIcon = styled(FontAwesomeIcon).attrs({
  name: 'flag',
})<{ name?: string }>`
  color: red;
  font-size: 30px;
`
