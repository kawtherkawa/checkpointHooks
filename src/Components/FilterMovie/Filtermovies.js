import React from 'react'
import { Form } from 'react-bootstrap'

const Filtermovies = ({inputSearch,setInputsearch}) => {

 //const handleInputSearch=(e) => {//donne l'élément qui a déclenché l'événement.
    //setInputSearch(e.target.value)//récupère la valeur de cet élément (un champ de saisie
  //}
  return (
    <div>
      <Form.Control type="url" placeholder="Enter your movie title " onChange={(e)=>setInputsearch(e.target.value)} value={inputSearch}/>
    </div>
  )
}

export default Filtermovies