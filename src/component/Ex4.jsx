import React from 'react'

const x = 123
const title = 'welcome to react'
const isView = false
const users = ['Prashu','Pachi','Prashanth','Sarika']
const emp = {
    id: 123,
    name: 'Prashu',
    email: 'prashu@gmail.com'
}

    function Ex4(props) {
        const y = 14

        return (
            <div>
                <h1>Variables and data binding in react</h1>
                <h4> x = {x} </h4>
                <h3> { title } </h3>
                <h3> boolean = { isView ? "Say True" : "Say False" } </h3>
                <hr/>
                <div>
                      { isView ? <h1>True</h1> : <h1>False</h1> }
                </div>

                <hr />

                <ul>
                    {
                        users.map((item,index) => {
                            return (
                                <li key={index}> { index } { item } </li>
                            )
                        })
                    }
                </ul>
                <hr/>

                <h3> emp id = { emp.id } </h3>
                <h3> emp name = { emp.name } </h3>
                <h3> emp email = { emp.email } </h3>
            </div>
        )
    }
export default Ex4