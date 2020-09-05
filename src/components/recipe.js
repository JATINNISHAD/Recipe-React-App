import React,{useState} from 'react';
import RecipeDetails from './ingredients';

const Recipe =({recipe})=>{
    const [show,setShow] = useState(false);
    const {label,image,url,ingredients} = recipe.recipe;
    return(
        <div className="recipe">
            <a href={url} target="_blank" >
                <h5>{label}</h5>
                <img src={image} alt={label}/>
            </a>
            <button onClick={()=>setShow(!show)} >ingredients</button>
            { show && <RecipeDetails ingredients={ingredients} />}
           
        </div>
    )
}

export default Recipe;