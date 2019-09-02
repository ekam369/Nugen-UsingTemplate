import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Head from '../Head/Head';
import Expenditure from '../Expenditure/Expenditure';
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
                    <Expenditure />  
                </section>
            </>
        );
    }
}
 
export default Layout;