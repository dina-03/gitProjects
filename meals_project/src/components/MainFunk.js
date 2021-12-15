import React, {useState} from "react";
import getData from "../store/store";
import MealList from "./MealList";
import MealWithComments from "./MealWithComments";


export const MealContext= React.createContext();


export default function MainFunk(){
    const [meals, setMeals]=useState(getMealsFromJson());
    const [currentMeal, setCurrentMeal]=useState(null)
    
    /* state={
        //meals:[],
        meals: getMealsFromJson(),
        currentMeal: null
    } */

    const changeCurrentMeal=(id)=>{
        const index=meals.findIndex(meal=> meal.idMeal===id)
        const meal={...meals[index]};
        setCurrentMeal(meal)
    }

    const showMeals=()=>{
        setCurrentMeal(null)
    }

    const addComment=(id, comment)=>{
        const newMeals=[...meals]
        const index=newMeals.findIndex(meal=> meal.idMeal===id)
        const meal={...newMeals[index]};
        const NewComments=[...meal.comments];
        NewComments.push({...comment, id:Date.now(), note: +comment.note})
        meal.comments=NewComments;
        meal.rate=(NewComments.reduce((sum, comment)=> sum +=comment.note, 0)/NewComments.length.toFixed(2));
        newMeals[index]=meal;
        setMeals(newMeals)
        setCurrentMeal(meal)
    }

    
        return(
            <MealContext.Provider value={{
                changeCurrentMeal,
                addComment
            }}>
            <div className="container">
                {currentMeal ? 
                <MealWithComments   meal={currentMeal}
                                    showMeals={showMeals}/> : 
                <MealList meals={meals}/>}
            </div>
            </MealContext.Provider>
        )
    

}

function getMealsFromJson(){
    const meals=JSON.parse(getData()).meals;
    console.log(meals)

    meals.forEach(el=>{
        el.comments=[];
        el.rate=0
    });
    console.log(meals);
    return meals
}

