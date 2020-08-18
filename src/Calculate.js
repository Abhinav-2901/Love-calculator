import React, { Component } from 'react'
import './App.css'
import Axios from 'axios'
import Result from './Result'



export default class Calculate extends Component {
  state = {
    fname: '',
    sname: '',
    // result: '',
    // percentage :'',
    // ffname :'',
    // ssname:''
    results:[]
  }

  handleFname = e => {
    this.setState({ fname: e.target.value.toUpperCase() })
  }

  handleSname = e => {
    this.setState({ sname: e.target.value.toUpperCase() })
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios({
      "method": "GET",
      "url": "https://love-calculator.p.rapidapi.com/getPercentage/?myparam1={this.state.fname}",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "d00deb011dmsh7bc0df4ac1b92cdp1f95c5jsn39c42457fcdb",
        "x-rapidapi-key": "d00deb011dmsh7bc0df4ac1b92cdp1f95c5jsn39c42457fcdb",
        "useQueryString": true
      }, "params": {
        "fname": this.state.fname,
        "sname": this.state.sname
      }
    })
      .then(res => { 
        this.setState({
          // ffname: res.data.fname,
          // ssname: res.data.sname,
          // percentage: res.data.percentage,
          results: res.data
        
        })
        console.log(res.data.results) })
  }

  // componentDidMount(){

  //   }

  render() {
    if(this.state.results !=''){
     return( <Result name={this.state.results} /> )
        }
    return (
      <React.Fragment>

        <div className='container-fluid bg'>
          <div className='row justify-content-center'>
            <h1 className='heading'>Love Calculator</h1>
            <form className="form-container" onSubmit={this.handleSubmit}>
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input type="text" className="form-control" name='fname' value={this.state.fname} onChange={this.handleFname} required />
              </div>
              <div className="form-group ">
                <label htmlFor="exampleInputPassword1">Second Name</label>
                <input type="text" className="form-control" name='sname' value={this.state.sname} onChange={this.handleSname} required />
                <br></br>
                <input type='submit' value="Calculate" className='btn btn-danger' />
              </div>
            </form>
          </div>



  </div>
        <div>

        </div>
      </React.Fragment >
    )
  }
}