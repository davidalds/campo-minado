import { styled } from 'styled-components/native'
import { FontAwesome as FontAwesomeIcon } from '@expo/vector-icons'

export const StyledModal = styled.Modal``

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.View`
  background-color: white;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`

export const ModalText = styled.Text`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`

export const ModalButton = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  background-color: black;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`

export const ResetIcon = styled(FontAwesomeIcon).attrs({
  name: 'refresh',
})<{ name?: string }>`
  font-size: 60px;
  color: white;
`
