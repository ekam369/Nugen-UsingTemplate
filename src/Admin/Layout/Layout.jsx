import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Head from '../Head/Head';
import { Switch, Route } from 'react-router-dom';
import Expenditure from '../Expendtiture/Expenditure';
class Layout extends Component {
    render() { 
        return (  
            <>
                <section id="container">
                    <Head />
                    <aside>
                        <Sidebar />
                    </aside>
                </section>

                <section id="main-content">
                    <section className="wrapper">
                        <Switch>
                            <Route path="/expenditure" component={Expenditure}/>
                        </Switch>
                    </section>  
                </section>
            </>
        );
    }
}
 
export default Layout;