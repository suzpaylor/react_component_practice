import React, { Component } from 'react'
import { render } from 'react-dom'

class favColors extends React.Component {
    state = {value: ''}

    newColor= e =>
        this.setState({ value: e.target.value})

    submit = e => {
        console.log(`New color: ${this.state.value}`)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favorite Color:
                    <input 
                    type="color" 
                    onChange={this.newColor}    
                    />
                </label>
            </form>
        )
    }
}


render(
    <favColors />
 , 
     document.getElementById('root')
)