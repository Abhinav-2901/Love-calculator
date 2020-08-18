import React, { Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom'

export default class Lovehome extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='conatiner '>
                    <div class="card text-center bg">
                        <div class="card-body">
                            <h5 class="card-title">Welcome to Online Love Calculator</h5>
                            <p class="card-text">Click below to check if your partner is perfect for you or not?</p>
                            <Link to="/calculate"><button class="btn btn-danger" >Check</button></Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

