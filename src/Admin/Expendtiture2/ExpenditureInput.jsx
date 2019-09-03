import React, { Component } from 'react';
import './css/ExpenditureInput.css';
import Helper from '../../Common/Helper';

class ExpenditureInput extends Component {

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addExpenditures = () => {
        Helper('expenditures', 'POST', this.state)
        .then((res) => {
            if(res.msg === 1){
                console.log("Expenditure added successfully");
            }
        })
        .catch((err) => {
            console.log(err + " Error")
        })
    }
    
    render() { 
        return (
            <>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                        <form>
                        <div className="modal-header">
                            <h5 className="modal-title mod-head" id="exampleModalLabel">Expenditures</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="inp-details-box">
                            <div className="detail-box">
                                <label>PAID BY</label>
                                <input onChange={this.handleInput} type="text" name="paid_by"  placeholder={"Paid By"} required/>
                            </div>
                            <div className="detail-box">
                                <label>Description</label>
                                <input onChange={this.handleInput} type="text" name="description" placeholder="Description" required/>
                            </div>
                            <div className="detail-box">
                                <label>Mode Of Payment</label>
                                    <select onChange={this.handleInput} name="mode_of_payment" id="mode" required>
                                    <option value="">Mode Of Payment</option>
                                    <option value="cash">Cash</option>
                                    <option value="cheque">Cheque</option>
                                    <option value="paytm">Paytm</option>
                                    <option value="googlepay">Google Pay</option>
                                    <option value="phonepe">Phone Pe</option>
                                </select>
                            </div>
                            <div className="detail-box">
                                <label>From Account Of</label>
                                <input onChange={this.handleInput} type="text" name="from_account_of" placeholder="From Account of" required/>
                            </div>
                            <div className="detail-box">
                                <label>Amount</label>
                                <input onChange={this.handleInput} type="number" name="amount" placeholder="Amount" required/>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.addExpenditures} type="submit" className="btn btn-primary">Add Expenditures</button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ExpenditureInput;