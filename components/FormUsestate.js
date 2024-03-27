import { useState } from 'react';

function FormUsestate() {
  const [person, setPerson] = useState({
    name: 'Salma Shaik',
    details: {
      title: 'Welcome To',
      city: 'Ongole',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVGEb5La5mwJQKE_5r0f0FWzr4ijIK8kRUzzi2wDZ&s',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      details: {
        ...person.details,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      details: {
        ...person.details,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      details: {
        ...person.details,
        image: e.target.value
      }
    });
  }

  return (
    <div>
      <form action=''>
      <label>Name:
        <input value={person.name} onChange={handleNameChange}/>
      </label><br/><br/>
      <label>Title:
        <input value={person.details.title} onChange={handleTitleChange}/>
      </label><br/><br/>
      <label>City:
        <input value={person.details.city} onChange={handleCityChange}/>
      </label><br/><br/>
      <label>Image:
        <input value={person.details.image} onChange={handleImageChange}/>
      </label><br/><br/>
      <button type='button'>Submit</button>
      <p>
      <img 
        src={person.details.image} 
        alt={person.details.title}/><br/>
        <b>{person.details.title}</b>
        {person.name}
        <br />
        located in {person.details.city}
      </p><br/><br/>
      </form>
    </div>
  );
}
export default FormUsestate;



