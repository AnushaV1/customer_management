import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <section className="Home col-md-12 p-0">
        <div className="banner container-fluid text-center text-light m-0 p-5">
            <div className="content-wrapper mb-5">
            <p className="lead">Customer Management in one convenient place</p>
            <Link to="/newcustomers" className="btn btn-primary btn-lg px-5 py-3 my-5">Add New Customer</Link>
            {' '}
            <Link to="/listcustomers" className="btn btn-primary btn-lg px-5 py-3 my-5">List Customers</Link>
            </div>
        </div>
        </section>
    );
}

export default Home;
