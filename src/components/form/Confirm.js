import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, email, phone, password, facebook, twitter, github }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Phone Number: {phone}</li>
                    
                    <li class="list-group-item">Facebook URL: <a href={facebook}>{facebook}</a></li>
                    <li class="list-group-item">Twitter URL: <a href={twitter}>{twitter}</a></li>
                    <li class="list-group-item">Github URL: <a href={github}>{github}</a></li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
