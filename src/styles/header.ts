import { styled } from 'styled-components/native'

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  height: 60px;
  width: 420px;
  border-radius: 10px;
  align-items: center;
`

export const WrapperTextHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const TextHeader = styled.Text`
  font-size: 30px;
  font-weight: bold;
`
