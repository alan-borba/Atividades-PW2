'use client'

import { useState } from 'react'
import './globals.css'

function FormularioEndereco() {
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [erroCep, setErroCep] = useState('')
  
  const buscarCep = async () => {
    setErroCep('')
    const cepLimpo = cep.replace(/\D/g, '')

    if (cepLimpo.length !== 8) {
      setErroCep('O CEP informado é inválido.')
      return
    }

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const dados = await resposta.json()
      
      if (dados.erro) {
        setErroCep('CEP não encontrado.')
        return
      }

      setLogradouro(dados.logradouro)
      setBairro(dados.bairro)
      setCidade(dados.localidade)
      setUf(dados.uf)

      const inputNumero = document.getElementById('numero')
      if (inputNumero) inputNumero.focus()

    } catch (erro) {
      setErroCep('Erro ao buscar CEP.')
    }
  }

  return (
    <div className="cartao-formulario">
      <h1>Endereço</h1>
      
      <div>
          <input type="text"
            placeholder='CEP'
            value={cep}
            className={erroCep ? 'input-erro' : ''}
            onChange={(e) => {
                setCep(e.target.value)
                setErroCep('')
                setLogradouro('')
                setNumero('')
                setBairro('')
                setCidade('')
                setUf('')
            }}
            onBlur={buscarCep}
            maxLength={9} 
          />
          {erroCep && <p className="mensagem-erro">{erroCep}</p>}
      </div>

      <input type="text"
        placeholder='Rua / Logradouro'
        value={logradouro}
        onChange={(e) => setLogradouro(e.target.value)}
      />
      <input type="text"
        id="numero"
        placeholder='Número'
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <input type="text"
        placeholder='Bairro'
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
      />
      <input type="text"
        placeholder='Cidade'
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <input type="text"
        placeholder='Estado (UF)'
        value={uf}
        onChange={(e) => setUf(e.target.value)}
      />
    </div>
  )
}

export default FormularioEndereco