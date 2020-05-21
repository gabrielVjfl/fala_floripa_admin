import React, {useState} from 'react'

import Axios from 'axios'

import $ from 'jquery'

function Get() {


const [state, setState] = useState({posts: []}) // o posts vai pegar

const [search, setSearch] = useState('')

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#my table li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
    
    Axios.get("http://localhost:8083/pessoas")
    .then(response => {
        setState({
            posts: response.data
        })
    }).catch(err => {
        console.log(err)
    }) 
    

    
const {posts} = state




// Onchange!
function handleChange(e) {
  e.preventDefault()
setSearch({...search, [e.target.name]: e.target.value})
}

///const filtro = posts.filter( posts  => {
// return  posts.nome.toLowerCase().includes( search.toLowerCase() )
//})


    return (

     
       <div>
<nav id='navs' className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a id="logo" className="navbar-brand" href="#">FALA FLORIPA! ADMIN</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input name="search" className="form-control mr-sm-2" type="text" onChange={handleChange} placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


       <label>Buscar : </label><br></br>
              <input className="form-control" placeholder="Busque" id="myinput" type="text"></input>
<br></br>
<br></br>
        <div className="card">
            <div id="corpo" className="card-body">
          
      

           
{
  
  
    posts.map(posts => 
// tem como fazer tabela tbm
        <ul id="mytable">
<li key={posts.id_postagens}>
   <div id="tag"> id: </div> {posts.id_postagens}<br></br><br></br>
    <div id="tag">Nome: </div>{posts.nome}<br></br><br></br>
    <div id="tag">Idade:</div> {posts.idade}<br></br><br></br>
   <div id="tag"> Email: </div>{posts.email}<br></br><br></br>
    <div id="tag">Bairro: </div>{posts.bairro}<br></br><br></br>
  <div id="tag">Problema: </div>{posts.problemas}<br></br><br></br>
  <div id="tag">Problema Principal: </div>{posts.problemaprincipal}<br></br><br></br>
 <div id="tag"> O que pode melhorar ? : </div>{posts.melhorar}<br></br><br></br>

   
    
</li>
<hr  color="black"></hr>
        </ul>
       
    )  
    }
        </div>
        </div>
  </div>
    )
}
export default Get
