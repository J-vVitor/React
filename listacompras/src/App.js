import './App.css';
import Pessoa from './components/Pessoa'

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

    </div>
  );
}

export default App;
