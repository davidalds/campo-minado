import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalText,
  ResetIcon,
  StyledModal,
} from '../../styles/modal'
import { IPropsModal } from '../types/modal'

const ModalComp = ({ isOpen, modalText, resetGame }: IPropsModal) => {
  return (
    <StyledModal transparent={true} animationType="fade" visible={isOpen}>
      <ModalContainer>
        <ModalContent>
          <ModalText>{modalText}</ModalText>
          <ModalButton onPress={resetGame}>
            <ResetIcon />
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </StyledModal>
  )
}

export default ModalComp
