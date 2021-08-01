import React, { Component } from 'react'
import './Dice.css'

const array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];



export class Dice extends Component {
    constructor(props) {
        super(props);
        this.props = {
            diceval: 1
        }
    }
    render() {
        // let val = Math.floor(Math.random() * 6 + 1);
        let diceclass = "fas fa-dice-" + array[this.props.diceval];
        console.log(diceclass);
        return (
            <div>
                <div className={diceclass}></div>
            </div>
        )
    }
}

export default Dice
