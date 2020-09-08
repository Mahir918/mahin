import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addData} from '../store/actions/postActions'

class Input extends Component {
    state = {
        name: ''
    }
    changeHandelar = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandelar =e =>{
        e.preventDefault()
        const profile = {
            name : this.state.name
        }
        this.props.addData(profile)
        this.setState({
            name: ''
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">To-Do App</h1>
                    <form onSubmit={this.submitHandelar}>
                        <div className="form-group">
                        <label htmlFor='wish'>Todo: </label>
                        <input 
                                type="text"
                                className='form-control'
                                placeholder="Enter Your Wish"
                                name="name"
                                id="wish"
                                autoComplete="off"
                                value={this.state.wish}
                                onChange={this.changeHandelar}
                            />
                        </div>
                        <button className="btn btn-primary my-3 d-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{addData})(Input)