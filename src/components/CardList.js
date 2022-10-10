import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
    
    return (
        <div>
            {
              robots.map((ele,index)=>{
                return (
                    <Card
                        key={index} 
                        id={robots[index].id} 
                        email={robots[index].email} 
                        name={robots[index].name} 
                    />
                     ); 
            
            })  
            }
        </div>
       
    );
}

export default CardList;