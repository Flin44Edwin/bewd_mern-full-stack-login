import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/authenticate', this.state)
            .then(res => {
                if (res.status === 200) {
                    // run the login function in the parent component
                    this.props.handleLogin();
                    // redirect to /
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (

            <section className="randompage">
            <form onSubmit={this.onSubmit} className="container is-fluid">
                <h1 className="headspace">Login Below!</h1>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                      />
                    </div>
                    <p className="help">Enter your registered Email Address</p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">Enter your Password</p>
                </div>
                <input className="button is-primary" type="submit" value="Submit" />
            </form>
             <div class="secondcontent">
               
            <br /><br /><br /><br />
            <p> Sign-in your account and continues were you left off .</p>
            <br /><br /><br /><br /><br /><br />
            </div>
             <footer class="site-footer">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-6">
                <p>Ads Directory raised €1.3million for charity by donating a portion of ad revenue to causes selected by its staff</p>
               <p> This project was created to express my knowledge on react </p>
                <p>&copy; 2020 Created by EDWIN ODEH</p>
              </div>
              </div>
              </div>
              </div>

                    
                </footer>
                </section>
        );
    }
}
