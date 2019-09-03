import React, { Component } from 'react';
import './css/Expenditure2.css';
import ExpenditureTable from './ExpenditureTable';
import ExpenditureInput from './ExpenditureInput';
import ExpenditureEdit from './ExpenditureEdit';
class Expenditure2 extends Component {

    constructor() {
        super();
        this.state = {
            expenditures: {
                amount: 0,
                description: "",
                from_account_of: "",
                mode_of_payment: "",
                paid_by: ""
            }
        }
    }

    populateExpenditures = (expenditure) => {
        this.setState({
            expenditures: expenditure
        })
    }

    render() { 
        console.log(this.state.expenditures);
        return (  
            <div className="table-agile-info">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Expenditures
                    </div>
                    <div className="row w3-res-tb">
                    <div className="col-sm-5 m-b-xs">
                        <div className="btn btn-primary addExp-button" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-plus-circle"></i>&nbsp;
                            <b>Add</b>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-3">
                        <div className="input-group">
                        <input type="text" className="input-sm form-control" placeholder="Search" />
                        <span className="input-group-btn">
                            <button className="btn btn-sm btn-default findExp-button" type="button">Find!</button>
                        </span>
                        </div>
                    </div>
                    </div>
                    <ExpenditureTable populateExpenditures={this.populateExpenditures} />
                    <ExpenditureInput />
                    <ExpenditureEdit expenditureFields={this.state.expenditures}/>
                    
                </div>
            </div>
        );
    }
}
 
export default Expenditure2;