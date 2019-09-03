import React, { Component } from 'react';
import Helper from '../../Common/Helper';
class ExpenditureTable extends Component {

    constructor() {
        super();

        this.state = {
            expenditures : []
        }
    }

    componentWillMount() {
        Helper('expenditures', 'GET', '')
        .then((res) => {
            this.setState({
                expenditures: res
            })
        })
    }

    render() { 
        return (  
            <>
                <div className="table-responsive">
                    <table className="table table-striped b-t b-light">
                        <thead className="for-table">
                            <tr className="for-table">
                                <th style={{color:"#fff"}}>Id</th>
                                <th style={{color:"#fff"}}>Paid By</th>
                                <th style={{color:"#fff"}}>Description</th>
                                <th style={{color:"#fff"}}>Mode Of Payment</th>
                                <th style={{color:"#fff"}}>From Account</th>
                                <th style={{color:"#fff"}}>Amount</th>
                                <th style={{color:"#fff"}}>Update</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.expenditures.map((v, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{v.id}</td>
                                            <td>{v.paid_by}</td>
                                            <td>{v.description}</td>
                                            <td>{v.mode_of_payment}</td>
                                            <td>{v.from_account_of}</td>
                                            <td>{v.amount}</td>
                                            <td>
                                                <i style={{color:"#4064f6", fontSize:"18px", fontWeight:"bold", cursor:"pointer"}} data-toggle="modal" data-target="#myModal" onClick={() => this.props.populateExpenditures(v)} className="fa fa-edit"></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <footer className="panel-footer">
                    <div className="row">
                        <div className="col-sm-5 text-center">
                        <small className="text-muted inline m-t-sm m-b-sm">showing 20-30 of 50 items</small>
                        </div>
                        <div className="col-sm-7 text-right text-center-xs">                
                        <ul className="pagination pagination-sm m-t-none m-b-none">
                            <li><a href="index.html"><i className="fa fa-chevron-left"></i></a></li>
                            <li><a href="index.html">1</a></li>
                            <li><a href="index.html">2</a></li>
                            <li><a href="index.html">3</a></li>
                            <li><a href="index.html">4</a></li>
                            <li><a href="index.html"><i className="fa fa-chevron-right"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
 
export default ExpenditureTable;