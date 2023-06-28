import {
  HeaderContainer,
  TextHeader,
  WrapperTextHeader,
} from '../../styles/header'
import { BombIcon, FlagIcon } from '../../styles/icons'
import { IPropsHeader } from '../types/header'

const Header = ({ flags, bombs }: IPropsHeader) => {
  return (
    <HeaderContainer>
      <WrapperTextHeader>
        <BombIcon />
        <TextHeader>{bombs}</TextHeader>
      </WrapperTextHeader>
      <WrapperTextHeader>
        <FlagIcon />
        <TextHeader>
          {flags} / {bombs}
        </TextHeader>
      </WrapperTextHeader>
    </HeaderContainer>
  )
}

export default Header
