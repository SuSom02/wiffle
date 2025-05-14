import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import styled from 'styled-components'

///////////임시 화면, 디자인 수정 필요

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // 실제 프로젝트에서는 API 호출 등으로 인증 처리
    if (username && password) {
      // 로그인 성공 -> 아이디값을 user에 저장후 인증성공 처리함
      login({ username })
      navigate('/')
    }
  }

  return (
    <Container className="login-container">
      <h1>HELLO, WELCOME</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            placeholder='ID'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            placeholder='PW'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h1 {
    margin: 0;
    padding-bottom: 20px;
  }
  button {
    margin-top: 20px;
    width: 100%;
  }
`