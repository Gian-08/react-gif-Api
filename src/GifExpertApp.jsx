import { useState } from "react"
import {AddCategory} from './components/AddCategory'
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () =>{
    
const [categories, setCategories] = useState(['One punch']);

const onAddCategory = (newCategory) => {

   if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
}
    
    return(
        <>
        {/*titulo*/}
            <h1>GifExpertApp</h1>
            {/*Input*/}
            <AddCategory onNewCategory={onAddCategory} />
            
             {/*Listado de Gif*/}
             <ol>
               
               { categories.map((category )=>
                    (
                       <GifGrid
                        key={category} 
                        category={category}/>
                    ))
                }
             </ol>
              {/*Gif Item*/}
        </>
    )
}