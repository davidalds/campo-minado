import Board from './src/components/board'
import { Container } from './src/styles/container'

export default function App() {
  return (
    <Container>
      <Board lines={8} columns={6} bombs={6} />
    </Container>
  )
}
