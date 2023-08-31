import { Container } from 'react-bootstrap';
import Formulario from './component/Formulario';
import { CategoriasProvider } from './context/CategoriasProvider';
import ListadoBebidas from './component/ListadoBebidas';
import ModalBebida from './component/ModalBebida';

import { BebidasProvider } from './context/BebidasProvider';

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Samurai Cocktail´s</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
