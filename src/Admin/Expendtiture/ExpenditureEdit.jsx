import React, { Component } from 'react';
import Helper from '../../Common/Helper';
class ExpenditureEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenditures: {
                id: this.props.expenditureFields.id,
                description: this.props.expenditureFields.description,
                from_account_of: this.props.expenditureFields.from_account_of,
                mode_of_payment: this.props.expenditureFields.mode_of_payment,
                paid_by: this.props.expenditureFields.paid_by,
                amount: this.props.expenditureFields.amount
            }
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            expenditures: props.expenditureFields
        });
    }

    handleInput = (e) => {
        let expenditures = this.state.expenditures;
        expenditures[e.target.name]= e.target.value 
        this.setState({
            expenditures
        })
    }

    updateExpenditures = () => {
        Helper(`expenditures/${this.state.expenditures.id}`, 'PUT', this.state.expenditures)
            .then((res) => {
                if (res.msg === 1) {
                    console.log("Expenditure updated successfully");
                }
            })
            .catch((err) => {
                console.log(err + " Error")
            })
    }

    render() { 
        return (  
            <>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                        <form >
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
                                <input onBlur={this.handleInput} onChange={this.handleInput} type="text" name="paid_by" value={this.state.expenditures.paid_by} required/>
                            </div>
                            <div className="detail-box">
                                <label>Description</label>
                                <input onBlur={this.handleInput} onChange={this.handleInput} type="text" name="description" value={this.state.expenditures.description} required/>
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
                                <input onBlur={this.handleInput} onChange={this.handleInput} type="text" name="from_account_of" value={this.state.expenditures.from_account_of} required/>
                            </div>
                            <div className="detail-box">
                                <label>Amount</label>
                                <input onBlur={this.handleInput} onChange={this.handleInput} type="number" name="amount" value={this.state.expenditures.amount} required/>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.updateExpenditures} type="submit" className="btn btn-primary">Add Expenditures</button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ExpenditureEdit;