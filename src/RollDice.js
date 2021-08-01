import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

export class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceval1: 1,
            diceval2: 4,
            rolling: false
        }
        this.clickHandle = this.clickHandle.bind(this);

    }

    clickHandle(e) {
        console.log("clicked");
        this.setState({ rolling: true })
        setTimeout(() => {
            this.setState({ diceval1: Math.floor(Math.random() * 6 + 1), diceval2: Math.floor(Math.random() * 6 + 1) });
        }, 800);


        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000);


    }

    render() {

        return (
            <div className="RollDice">
                <div className={this.state.rolling ? "Dices Shake" : "Dices"}>
                    <Dice diceval={this.state.diceval1}></Dice>
                    <Dice diceval={this.state.diceval2}></Dice>
                </div>

                <button className="Dice-btn" onClick={this.clickHandle} disabled={this.state.rolling} >

                    {this.state.rolling ? "Rolling" : "Press to Roll"}</button>
            </div>
        )
    }
}

export default RollDice
