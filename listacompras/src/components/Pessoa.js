function Pessoa(props){
  return(
    <div>
      <h1>Nome: {props.nome}</h1>
      <h2>Idade: {props.idade}</h2>
      <h2>Profissão: {props.profissao}</h2>
    </div>
  )

}

export default Pessoa
