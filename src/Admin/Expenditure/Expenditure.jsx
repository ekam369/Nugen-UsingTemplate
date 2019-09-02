import React, { Component } from 'react';
import './Expenditure.css';
// import ExpenditureInput from './ExpenditureInput';
// import ExpenditureTable from './ExpenditureTable';
// import ExpenditureEditInput from './ExpenditureEditInput';

class Expenditure extends Component {

    state = {
        showInp: false,
        showEdit: false,
        user: {
            amount: 0,
            description: "",
            from_account_of: "",
            mode_of_payment: "",
            paid_by: ""
        }
    }

    showExpInp = () => {
        this.setState( {
            showInp: true
        })
    }

    showEditInp = (user) => {
        this.setState({
            showEdit: true,
            user: user
        })
    }

    updateParState = () => {
        this.setState({
            showInp: false
        })
    }

    updateEditState = () => {
        console.log("Clicked")
        this.setState({
            showEdit: false
        })
    }


    render() { 
        return (
            <div>
                <div className="exp-cont">
                    <div className="up-cont">
                        <div className="assi-tex">Expenditures</div>
                        <div className="bt-search">
                            <div onClick={this.showExpInp} className="bt-add">
                                <i className="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>
                    </div>
                    <div className="box">
                        {/* <ExpenditureTable toggleState={this.showEditInp} /> */}
                    </div>
                </div>
                {/* <ExpenditureInput show={this.state.showInp} toggleState={this.updateParState}/> */}
                {/* <ExpenditureEditInput 
                    show={this.state.showEdit} 
                    toggleState={this.updateEditState}
                    user= {this.state.user}    
                /> */}
            </div>  
        );
    }
}
 
export default Expenditure;