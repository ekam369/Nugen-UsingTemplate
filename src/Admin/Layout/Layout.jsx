import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Head from '../Head/Head';
import Expenditure2 from '../Expendtiture2/Expenditure2';
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
                        <Expenditure2 />    
                    </section>  
                </section>
            </>
        );
    }
}
 
export default Layout;