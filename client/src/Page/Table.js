import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData,removeData } from '../store/actions/postActions'

class Table extends Component {
    componentDidMount() {
        this.props.getData()
    }
    render() {
        let { auth } = this.props
        return (
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            auth.map((result, index) => (
                                <tr key={result._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.name}</td>
                                    <td onClick={()=>this.props.removeData(result._id)} className="btn btn-danger">Remove</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { getData,removeData })(Table)