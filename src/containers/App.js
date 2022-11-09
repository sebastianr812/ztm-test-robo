import React, { /* useEffect, useState */ } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import Header from '../components/Header'
import './App.css';
import { Component } from 'react'

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js'

// redux needed functions

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
        robots: state.requestRobots.robots
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// Class component 
class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {

        const { searchField, onSearchChange, robots, isPending } = this.props

        const filteredRobots = robots.filter((ele) => {

            return ele.name.toLowerCase().includes(searchField.toLowerCase())
        })
        // for the if robots legnth is 0 - that would evaluate to false, bc 0 is false and 1 is true
        //so we can use the ! in from of robots.length to clean up the code a bit

        // the whole if else conditional can be converted into a ternary to clean up the code a bit
        return (isPending) ?
            <h1>Loading</h1> :

            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll >
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>

            );


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);






///


// functional and hooks component 

// const App = () => {

//     // hooks 

//     const [robots, setRobots] = useState([])
//     const [searchField, setSearchField] = useState('')
//     // const [count, setCount] = useState(0)

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => setRobots(users))

//     }, [])

//     const onSearchChange = (event) => {

//         setSearchField(event.target.value)

//     }

//     const filteredRobots = robots.filter((ele) => {
//         return ele.name.toLowerCase().includes(searchField.toLowerCase())
//     })

//     return (!robots.length) ?
//         <h1>Loading</h1> :

//         (
//             <div className='tc'>
//                 <h1 className='f1'>Robo-Friends!</h1>


//                 <SearchBox searchChange={onSearchChange} />
//                 <Scroll >
//                     <CardList robots={filteredRobots} />
//                 </Scroll>

//             </div>

//         );
// }