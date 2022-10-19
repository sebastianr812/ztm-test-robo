import React, { useEffect, useState} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import './App.css';


// functional and hooks component 

const App = ()=>{

    // hooks 

    const [robots,setRobots] = useState([])
    const [searchField,setSearchField] = useState('')
    const [count,setCount] = useState(0)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json() )
        .then(users => setRobots(users))

    },[])
   
    const onSearchChange = (event)=>{
        
        setSearchField( event.target.value)
 
     }
    
     const filteredRobots = robots.filter((ele)=>{
         return ele.name.toLowerCase().includes(searchField.toLowerCase())
      })

      return (!robots.length )? 
      <h1>Loading</h1>:
      
      (
         <div className='tc'>
             <h1 className='f1'>Robo-Friends!</h1>
             <button onClick={()=>setCount(count+1)}>Click Me</button>
             <p>You have clicked {count} times</p>
             <SearchBox searchChange = {onSearchChange} />
             <Scroll >
                 <CardList robots={ filteredRobots} />
             </Scroll>
              
         </div>
        
     );
}





// Class component 
// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             robots: [],
//             searchField: '',
//         }
        
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=> response.json() )
//         .then(users=> this.setState({robots:users }));
//     }

//     onSearchChange = (event)=>{
        
//        this.setState({searchField : event.target.value})

        
        
//     }

//     render(){
//         const {robots, searchField} = this.state
//         const filteredRobots = robots.filter((ele)=>{
//             return ele.name.toLowerCase().includes(searchField.toLowerCase())
//          })
// // for the if robots legnth is 0 - that would evaluate to false, bc 0 is false and 1 is true
// //so we can use the ! in from of robots.length to clean up the code a bit

// // the whole if else conditional can be converted into a ternary to clean up the code a bit
//         return (!robots.length )? 
//              <h1>Loading</h1>:
             
//              (
//                 <div className='tc'>
//                     <h1 className='f1'>Robo-Friends!</h1>
//                     <SearchBox searchChange = {this.onSearchChange} />
//                     <Scroll >
//                         <CardList robots={ filteredRobots} />
//                     </Scroll>
                     
//                 </div>
               
//             );
        
        
//     }
// }

export default App;