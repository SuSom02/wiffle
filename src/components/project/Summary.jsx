import React from 'react'
import styled from 'styled-components'
import { EllipsisOutlined  } from '@ant-design/icons';

const Summary = () => {

  //서버에서 호출하는것으로 수정필요.
  const projectDetail = {
    article: 'Lorem ipsum dolor sit amet consectetur. Eu ipsum amet aliquam pulvinar. Fermentum gravida vestibulum tempor magna. Elit velit nunc viverra magna. Tristique eget orci sagittis at at. Vitae rhoncus sollicitudin a ac. Molestie gravida ac ac nunc iaculis nibh et. Purus eget urna tempor quisque velit posuere eget adipiscing nullam. Enim tortor ullamcorper mattis adipiscing proin. Lectus dolor et sit pharetra pretium.'
  }
  
  return (
    <main>
      <Header>
        <div className='title'>프로젝트 개요</div>
        <div className='btnWrapper'>
          <button><EllipsisOutlined/></button>
        </div>
      </Header>
      <Article>
        <p>{projectDetail.article}</p>
      </Article>
    </main>
  )
}

export default Summary

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 24px;
  color: #454545;
  button {
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    background-color: white;
    outline: none;
    border: none;
  }
`

const Article = styled.article`
  margin-top: 24px;
  p {
    margin: 0;
  }
`