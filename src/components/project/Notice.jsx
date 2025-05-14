import React from 'react'
import styled from 'styled-components'
import { PlusOutlined  } from '@ant-design/icons';

const Notice = () => {
  const noticeList = [
    {
      title: '오늘 안에 명세서 작성 다 해오세요', 
      author: '작성자',
      createdAt: '2025.04.20'
    },
    {
      title: '공지할 사항은 여기에 적어주세요', 
      author: '작성자',
      createdAt: '2025.04.20'
    },
    {
      title: '설계서 제출 관련 안내', 
      author: '작성자',
      createdAt: '2025.04.20'
    }
  ]

  return (
    <main>
      <Header>
        <div className='title'>Notice</div>
        <div className='btnWrapper'>
          <button><PlusOutlined/></button>
        </div>
      </Header>
      <List>
        {noticeList.map((a, i) => {
          return (
            <div key={i}>
              <span className='title'>{a.title}</span>
              <span className='author'>{a.author}</span>
              <span className='createdAt'>{a.createdAt}</span>
            </div>
          )
        })}
      </List>
    </main>
  )
}

export default Notice

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

const List = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  div {
    width: 100%;
    height: 39px;
    display: flex;
    border-bottom: 1px solid #454545;
    align-items: center;
    .title {
      margin-right: auto;
    }
    .author {
      margin-right: 12px;
      color: #454545;
    }
    .createdAt {
      color: #454545;
    }
  }
`