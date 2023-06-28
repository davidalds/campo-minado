import styled from 'styled-components/native'

export const FieldText = styled.Text<{
  status?: 'opened' | 'marked' | 'closed'
}>`
  font-size: 30px;
  font-weight: bold;
  display: ${(props) => {
    switch (props.status) {
      case 'opened':
        return 'flex'
      case 'marked':
        return 'flex'
      default:
        return 'none'
    }
  }};
`

export const StatusNumber = styled.Text<{ n: number }>`
  color: ${({ n }) => {
    switch (n) {
      case 8:
        return 'purple'
      case 7:
        return 'darkblue'
      case 6:
        return 'green'
      case 5:
        return 'red'
      case 4:
        return 'orange'
      case 3:
        return 'blue'
      case 2:
        return 'brown'
      default:
        return 'black'
    }
  }};
`

export const FieldContainer = styled.TouchableOpacity<{
  isOpen?: boolean
  isBomb?: boolean
  isMarked?: boolean
}>`
  background-color: ${(props) => (props.isOpen ? '#e4dfda' : 'lightgray')};
  border: ${(props) => (props.isOpen ? '1px solid gray' : '3px solid gray')};
  flex: 1;
  flex-basis: auto;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`
