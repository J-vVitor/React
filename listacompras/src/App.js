import './App.css';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';


function App() {

  const foto = 'https://via.placeholder.com/150'

  return (
    <div className="header">
      <img src={foto} alt='foto'/>
      <Pessoa
        nome='Vitor'
        idade='19'
        profissao='Desenvolvedor'
      />
      <Lista/>
    </div>
  );
}

export default App;
