import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ShippingEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {updatedShipping: {}};
    }

    componentDidMount() {
        this.setState({updatedShipping: this.props.children[1]});
    }


    submitEdit(id) {
        let data = this.state.updatedShipping;
        axios.post('http://localhost:3002/shipping-info/update', data)
            .then((response) => {
                console.log(response);
                //this.setState({shippings: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    cancelEdit(id) {
        ReactDOM.unmountComponentAtNode(document.getElementById('dinamicView'));
    }

    render() {
        return (
            <aside className='edit-existing-shipping' id={this.props.children[1]._id}>

                <h2>Shipping information:</h2>
                <h3 id="message"></h3>
                <div className='shipping-details col-md-12 col-lg-12'>
                    <label className='row pull-left col-md-12 col-lg-12'>first
                        Name: <input type='text' name='firstname' placeholder='first name'
                                     value={this.state.updatedShipping.firstname}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>last
                        Name: <input type='text' name='lastname' placeholder='last name'
                                     value={this.state.updatedShipping.lastname}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>Phone:
                        <input type='text' name='phone' placeholder='phone'
                               value={this.state.updatedShipping.phone}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>Email:
                        <input type='text' name='email' placeholder='email'
                               value={this.state.updatedShipping.email}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Street:
                        <input type='text' name='street' placeholder='street'
                               value={this.state.updatedShipping.addressStreet}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Floor:
                        <input type='text' name='Floor' placeholder='Floor'
                               value={this.state.updatedShipping.addressStreet}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Appartment:
                        <input type='text' name='appartment' placeholder='appartment'
                               value={this.state.updatedShipping.addressAppartment}/></label>
                    <label className='row pull-left col-md-10 col-lg-10'>Special notes:
                        <textarea type='text' name='notes' placeholder='notes'
                                  value={this.state.updatedShipping.notes}/></label>
                </div>
                <div className="row">
                    <button className="btn btn-primary pull-left col-md-5 col-lg-5"
                            onClick={() => this.submitEdit(this.props.children[1]._id)}>Submit
                    </button>
                    <button className="btn btn-danger pull-left col-md-5 col-lg-5"
                            onClick={() => this.cancelEdit(this.props.children[1]._id)}>
                        Cancel
                    </button>
                </div>
            </aside>
        )
    }
}

class ShippingCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {createdShipping: {}};
    }

    componentDidMount() {
        this.setState({createdShipping: this.props.children[1]});
    }


    submitEdit(id) {
        let data = this.state.createdShipping;
        axios.post('http://localhost:3002/shipping-info/create', data)
            .then((response) => {
                console.log(response);
                //this.setState({shippings: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    cancelEdit(id) {
        ReactDOM.unmountComponentAtNode(document.getElementById('dinamicView'));
    }

    render() {
        return (
            <aside className='edit-existing-shipping' id={this.props.children[1]._id}>

                <h2>Shipping information:</h2>
                <h3 id="message"></h3>
                <div className='shipping-details col-md-12 col-lg-12'>
                    <label className='row pull-left col-md-12 col-lg-12'>first
                        Name: <input type='text' name='firstname' placeholder='first name'
                                     value={this.state.createdShipping.firstname}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>last
                        Name: <input type='text' name='lastname' placeholder='last name'
                                     value={this.state.createdShipping.lastname}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>Phone:
                        <input type='text' name='phone' placeholder='phone'
                               value={this.state.createdShipping.phone}/></label>
                    <label className='row pull-left col-md-12 col-lg-12'>Email:
                        <input type='text' name='email' placeholder='email'
                               value={this.state.createdShipping.email}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Street:
                        <input type='text' name='street' placeholder='street'
                               value={this.state.createdShipping.addressStreet}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Floor:
                        <input type='text' name='Floor' placeholder='Floor'
                               value={this.state.createdShipping.addressStreet}/></label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Appartment:
                        <input type='text' name='appartment' placeholder='appartment'
                               value={this.state.createdShipping.addressAppartment}/></label>
                    <label className='row pull-left col-md-10 col-lg-10'>Special notes:
                        <textarea type='text' name='notes' placeholder='notes'
                                  value={this.state.createdShipping.notes}/></label>
                </div>
                <div className="row">
                    <button className="btn btn-primary pull-left col-md-5 col-lg-5"
                            onClick={() => this.submitEdit(this.props.children[1]._id)}>Submit
                    </button>
                    <button className="btn btn-danger pull-left col-md-5 col-lg-5"
                            onClick={() => this.cancelEdit(this.props.children[1]._id)}>
                        Cancel
                    </button>
                </div>
            </aside>
        )
    }
}



class Shipping extends React.Component {


    render() {
        return (
            <div>
                <h3>Shipping information:</h3>
                <div className='shipping-details col-md-12 col-lg-12'>
                    <label className='row pull-left col-md-12 col-lg-12'>first
                        Name: {this.props.children.firstname}</label>
                    <label className='row pull-left col-md-12 col-lg-12'>last
                        Name: {this.props.children.lastname}</label>
                    <label className='row pull-left col-md-12 col-lg-12'>Phone: {this.props.children.phone}</label>
                    <label className='row pull-left col-md-12 col-lg-12'>Email: {this.props.children.email}</label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Street:{this.props.children.addressStreet}</label>
                    <label className='row pull-left col-md-3 col-lg-3'>Floor:{this.props.children.addressFloor}</label>
                    <label
                        className='row pull-left col-md-3 col-lg-3'>Appartment:{this.props.children.addressAppartment}</label>
                    <label className='row pull-left col-md-10 col-lg-10'>Special
                        notes: {this.props.children.notes}</label>
                </div>
            </div>
        )
    }
}


class shippingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {shippings: []};
        this.shippings = [];
        this.showEdit = false;
        this.showEditItem;

    }

    componentDidMount() {
        this.getShippingList();
    }

    createShipping = (item) => {
        this.showEdit = true;
        this.showEditItem = item;
        console.log('edit :')
        console.log(item._id);
        ReactDOM.unmountComponentAtNode(document.getElementById('dinamicView'))
        ReactDOM.render(
            <ShippingCreate> {this.showEditItem} </ShippingCreate>
            , document.getElementById('dinamicView'));
    }

    editShipping = (item) => {
        this.showEdit = true;
        this.showEditItem = item;
        console.log('edit :')
        console.log(item._id);
        ReactDOM.unmountComponentAtNode(document.getElementById('dinamicView'))
        ReactDOM.render(
            <ShippingEdit> {this.showEditItem} </ShippingEdit>
            , document.getElementById('dinamicView'));
    }

    deleteShipping = (item) => {
        let data = item;
        axios.post('http://localhost:3002/shipping-info/delete', data)
            .then((response) => {
                console.log(response);
                //this.setState({shippings: response.data});
                this.getShippingList();
            })
            .catch((error) => {
                console.log(error);
            });
    }


    eachShipping = (item, i) => {
        return (
            <div key={i} index={i} className='shipping-ctr' id={item._id}>
                <div className="row">
                    <button className="btn btn-primary pull-left col-md-5 col-lg-5"
                            onClick={() => this.editShipping(item)}>Edit
                    </button>
                    <button className="btn btn-danger pull-left col-md-5 col-lg-5"
                            onClick={() => this.deleteShipping(item)}>
                        Delete
                    </button>
                </div>
                <Shipping>
                    {item}
                </Shipping>
            </div>
        )
    }

    getShippingList = () => {
        axios.get('http://localhost:3002/shipping-info/all')
            .then((response) => {
                this.setState({shippings: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <section id="dinamicView" className="col-md-5 col-lg-5 pull-right">
                    {this.showEdit}
                </section>
                <section className="col-md-5 col-lg-5 pull-left">
                    <button className="btn btn-info" onClick={this.getShippingList}>Refresh</button>
                    <button className="btn btn-create" onClick={this.createShipping}>Create new</button>
                    <aside className="shipping_ctr">
                        {this.state.shippings.map(this.eachShipping)}
                    </aside>
                </section>
            </div>
        )
    }
    ;
}

export default shippingList;