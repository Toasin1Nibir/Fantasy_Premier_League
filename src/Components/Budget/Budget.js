import React from 'react';

const Budget = (props) => {
    const addPlayercart = props.addPlayercart
 
   
    console.log(addPlayercart)
    const TotalBudget = addPlayercart.reduce((sum , players)=> sum + players.salary,0)
    return (
        <div>   
           <h1>Total budget:${TotalBudget}</h1>
        </div>
    );
};

export default Budget;