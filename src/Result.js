import React, { Component } from 'react'
import './App.css'
import pic from './download.jpg'



export default class Result extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div className='container-fluid'> */}
                <div class="card">
  <img src={pic} class=" pic" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Love Percent : {this.props.name.percentage}%</h5>
    <p class="card-text">{this.props.name.result}</p>
    <p class="btn btn-primary">{this.props.name.fname} & {this.props.name.sname}</p>
  </div>
{/* </div> */}

                </div>
            </React.Fragment>

        )
    }
}

