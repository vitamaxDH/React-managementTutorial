import React from 'react';
import logo from './logo.svg';
import Customer from './components/customer'

const customers = [
  {
    id : 1,
    image : 'https://placeimg.com/64/64/1',
    name : '홍길동',
    bday : '921119',
    gender : '남자',
    job : '학생'
  },
  {
    id : 2,
    image : 'https://placeimg.com/64/64/2',
    name : '베이직',
    bday : '123423',
    gender : '남자',
    job : '천재'
  },
  {
    id : 3,
    image : 'https://placeimg.com/64/64/3',
    name : '김갑순',
    bday : '693424',
    gender : '여자',
    job : '바보'
  }
]

function App() {
  return (
    <React.Fragment>
      {
        customers.map(c=>{
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            bday={c.bday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }

   
   
    </React.Fragment>
    );
}

export default App;
