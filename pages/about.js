import React from 'react'

// when to use:
// 1. for smaller components
// 2. reusable components
// 3. presentational components, partially right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'foo'
//     return (
//         <h1>Helle About {message}</h1>
//     )
// }

// when to use:
// 1. bigger components
// 2. lots of state
class About extends React.Component {
    render() {
        return (
            <h1>Hello I am class component</h1>
        )
    }
}


export default About