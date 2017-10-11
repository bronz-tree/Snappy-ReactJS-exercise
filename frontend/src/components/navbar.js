import React from 'react';

class MyNavbar extends React.Component {
    render() {
        return (
            <section className="container-fluid">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <ul className="navbar-header">
                            <li><a className="navbar-brand align-left" href="">Snappy ReactJS Exercise</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="">Home</a></li>
                            <li><a href="admin-view">Admin-view</a></li>
                            <li><a href="shipping-info">Shipping-info</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
        )
    };
}

export default MyNavbar;