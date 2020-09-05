import React,{useState} from 'react';
import Axios from 'axios';
import './App.css';
import Recipe from './components/recipe';
import Alert from './components/alert';

const App =()=>{

  const [query,setQuery] = useState('');
  const [recipes,setRecipes] = useState([]);
  const [alert,setAlert] = useState('');

  const App_Id = '6694f958';
  const App_Key = 'e8217704a836e2d7a2f026f9943f711e';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}&from=0&to=9&calories=591-722&health=alcohol-free`;

  const getData = async()=>{
    if(query !=='' ){
      const result = await Axios.get(url);
      if(!result.data.more){
        return setAlert("No food with such name.")
      }
      setRecipes(result.data.hits);
      console.log(result);
      setQuery('')
      setAlert('')
    }else{
      setAlert('Please fill the form');
    }
    
  }
  const onChange=(e)=>{
    setQuery(e.target.value);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    getData();
  }

  return (
    <div className="App">
      <h1>Recipe Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Search Recipe" 
          autoComplete="off" 
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      { alert !=='' && <Alert alert={alert} />}
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe=><Recipe key={recipe.recipe.label} recipe={recipe} />)}
      </div>
    </div>
  )
}

export default App;