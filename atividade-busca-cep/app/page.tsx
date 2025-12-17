  'use client'

  import { useState } from 'react'

  function App() {
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    
    const buscarCep = async () => {
      try {
        setLogradouro("")
        setNumero("")
        setBairro("")
        setCidade("")
        setUf("")
        
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const dados = await resposta.json()
        if (dados.erro) {
          alert('CEP não encontrado!')
          return
        }

        setLogradouro(dados.logradouro)
        setBairro(dados.bairro)
        setCidade(dados.localidade)
        setUf(dados.uf)
      } catch (error) {
        alert('CEP não encontrado!')
      }

  }

    return (
      <>
        <h1>Adress</h1>
        
        <input type="text"
          placeholder='Digite o Cep'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onBlur={buscarCep}
        />
        <input type="text"
          placeholder='Digite o Logradouro'
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
        <input type="text"
          id="numero"
          placeholder='Digite o Número'
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input type="text"
          placeholder='Digite o Bairro'
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <input type="text"
          placeholder='Digite o Cidade'
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <input type="text"
          placeholder='Digite o UF'
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        />
      </>
      
    )

  }

  export default App