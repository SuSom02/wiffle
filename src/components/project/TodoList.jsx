import React from 'react'
import styled from 'styled-components'
import { PlusOutlined, EllipsisOutlined, ArrowRightOutlined  } from '@ant-design/icons';

const TodoList = () => {
  const todoListDetail = [
    {
      title: '서버 연동하기',
      members: ['User1', 'User2'],
      dueDate: '2025.03.20',
    },
    {
      title: '명세서 작성',
      members: ['User1', 'User2'],
      dueDate: '2025.03.20',
    },
    {
      title: '디자인 완성하기',
      members: ['User1', 'User2'],
      dueDate: '2025.03.20',
    }
  ]

  return (
    <main>
      <Header>
        <div className='title'>TO-DO-LIST</div>
        <div className='btnWrapper'>
          <button><PlusOutlined/></button>
        </div>
      </Header>
      <CardList>
        {todoListDetail.map((a, i)=>{
          return (
            <Card key={i}>
              <header>
                <div className='title'>{a.title}</div>
                <div className='btnWrapper'>
                  <button><EllipsisOutlined/></button>
                </div>
              </header>
              <article>
                <span className='members'>
                  담당인원:&nbsp;
                  {a.members.map((member, index) => (
                    <React.Fragment key={index}>
                      {member}
                      {index < a.members.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </span>
                <span className='dueDate'>마감일: {a.dueDate}</span>
              </article>
              <span className='more'>
                더보기
                <ArrowRightOutlined />
              </span>
            </Card>
          )
        })}
      </CardList>
    </main>
  )
}

export default TodoList

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

const CardList = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  border-radius: 13px;
  box-shadow: rgba(101, 155, 255, 0.3) 0px 4px 16px;
  padding: 20px 32px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    .btnWrapper {
      width: 18px;
      height: 18px;
    }
    button {
      width: 18px;
      height: 18px;
      padding: 0;
      display: flex;
      justify-content: center;
      background-color: white;
      outline: none;
      border: none;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;
  }
  .more {
    width: 100%;
    height: 40px;
    background-color: #659BFF;
    border-radius: 13px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    cursor: pointer;
  }
`