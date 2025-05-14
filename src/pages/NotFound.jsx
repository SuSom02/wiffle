import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Container>
      <span className='title'>😵 Not Found</span>
      <span className='desc'>잘못된 주소이거나 네트워크 오류입니다</span>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;

  .title {
    font-size: 18px;
  }
  .desc {
    font-size: 11px;
    color: #454545;
  }
`