import React, { Component } from 'react'


const x = 5219
const title = 'welcome to react'
const isView = false
const users = ['Apple','Banana','Coconut','Grapes']
const emp = {
    id: 740,
    name: 'Prashanth',
    email: 'prashanth@gmail.com'
}
class Ex7 extends Component {

    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div>
                <h1>Variables and data binding in class Component</h1>
            </div>
        )
    }
}

export default Ex7