import { useState, useEffect, useReducer } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [estado, setEstado] = useState(false);
  const meuNome = (event) => { setNome(event.target.value) };
  const minhaIdade = (event) => { setIdade(event.target.value) };

  useEffect(() => {
    console.log('mudei estado')
  },[estado])
  return (

    <>
      <div className='main'>
        <div className='inputs'>
          <label htmlFor="nome">Digite seu nome:</label>
          <input onChange={meuNome} type="text" name="nome" id="nome" />
          <label htmlFor="idade">Digite sua idade:</label>
          <input onChange={minhaIdade} type="number" name="idade" id="idade" />
        </div>

        <div className='container'>

          {estado == true && nome !== '' && idade !== '' ? (
            <>
              <p>O nome digitado é : {nome} </p>
              <p>A idade digita é :{idade} </p>
            </>
          ): <>
              <p>Preencha todos os campos...</p>
            </>}

        </div>
        <button onClick={() => (setEstado(true))} className='btn'>Clique</button>
      </div>

    </>
  )
}

export default App
