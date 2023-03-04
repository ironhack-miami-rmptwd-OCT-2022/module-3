import logo from './logo.svg';
import './App.css';
import allTheContacts from "./contacts.json";
import {useState} from 'react';
const firstFiveContacts = allTheContacts.splice(0,5);

function App() {
  const [contactsShowing, setContactsShowing ] = useState(firstFiveContacts);

  const addRandomContact = () =>{
    console.log(allTheContacts)
    const randomNumber = Math.floor(Math.random()* allTheContacts.length)
    console.log(randomNumber);
    const newContact = allTheContacts[randomNumber];
    const contactsShowingCopy = [...contactsShowing];
    contactsShowingCopy.unshift(newContact);
    allTheContacts.splice(randomNumber,1);
    setContactsShowing(contactsShowingCopy);
  }


  const sortBy = (nameOrPopularity)=>{
    const contactsShowingCopy = [...contactsShowing];

    if(nameOrPopularity === "name"){
      contactsShowingCopy.sort((a,b)=>{
        if(a[nameOrPopularity] < b[nameOrPopularity]){
          return -1
        } else if (b[nameOrPopularity] < a[nameOrPopularity]){
          return 1
        } else {
          return 0
        } 
      });
    } 

    if(nameOrPopularity === "popularity"){
      contactsShowingCopy.sort((a,b)=>{
        if(a[nameOrPopularity] > b[nameOrPopularity]){
          return -1
        } else if (b[nameOrPopularity] > a[nameOrPopularity]){
          return 1
        } else {
          return 0
        } 
      });
    } 

      setContactsShowing(contactsShowingCopy);

  }


  const removeContact = (index) =>{
      const contactsShowingCopy = [...contactsShowing];
      contactsShowingCopy.splice(index, 1);
      setContactsShowing(contactsShowingCopy);
  }

  const visibleContacts = contactsShowing.map((eachContact,index)=>{
    return(
      <tr key={eachContact.id}>
        <td>{eachContact.name}</td>
        <td>
          <img src={eachContact.pictureUrl} />
        </td>
        <td>{eachContact.popularity.toFixed(2)}</td>
        <td>
        {eachContact.wonOscar && <img src="/trophy.png" /> }
        </td>
       <td>
       {eachContact.wonEmmy &&  <img src="/trophy.png" />  }
        </td>

        <td>
          <button onClick={()=>{removeContact(index)}}> Remove </button>
        </td>
      </tr>

    )
  })

  return (
    <div className="App">

      <button onClick={addRandomContact}> Add </button>

      <button onClick={()=>{sortBy("name")}}> Sort By Name </button>

      <button onClick={()=>{sortBy("popularity")}}> Sort By Popularity </button>

    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Picture</th>
        <th>popularity</th>
        <th>Oscar</th>
        <th>Emmy</th>
      </tr>
      </thead>
      <tbody>
        {visibleContacts}
      </tbody>
      
    </table>





      
    </div>
  );
}

export default App;
