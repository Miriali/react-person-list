import React from 'react';
import './App.css';

const App = () => <PersonList/>;

const PersonList = () => {

  const people = [
    {
      img: 22, 
      name: 'John Doe', 
      job:'developer',
      message: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, reiciendis".'
    },
    {
      img: 32, 
      name: 'Bob Smith', 
      job:'designer',
      message: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, reiciendis".'
    },

    {
      img: 56, 
      name: 'Peter Parker', 
      job:'artista',
      message: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, reiciendis".'
    }
  ]


  return (
   <section>
     <Person person={people[0]}/>
     <Person person={people[1]}/>
     <Person person={people[2]}/>
   </section>)
};
        
const Person = (props) => {
  const{img,name,job, message} = props.person;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;


  return ( 
    <div className="person">
      <img src={url} alt="images"/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{message}</p>
      </div>
    </div>
);
};

export default App
