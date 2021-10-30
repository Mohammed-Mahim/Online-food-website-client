import React from 'react';

const Contact = () => {
    return (
        <div className="container" id="contact">
            <div className="d-flex align-items-center justify-content-center py-5">
                <h1 className="text-success fw-bold">Contact Us</h1>
            </div>
            <div className="row">
               <div className="col-md-6 p-5">
                   <h3>Ask How We Can Help You </h3>
                   <br />
                   

                   <h6 className="text-primary">See Our Platform in Action </h6>

                   <h2>Points Of contact </h2>
                   <br />
                   <br />
                   <h4>U.S | Tune Headquaters</h4>
                   <p className="text-muted">2200 western Ave. seattle WA-3429</p>

                    <h4>Information Sales </h4>
                   <p className="fw-bold"><strong>onlinefooddelivery333@gmail.com</strong> </p>
               </div>
               <div className="col-md-6 px-4">
                   <small>Please note: all fields are required</small>
                   <legend>First name: </legend><input className="form-control mb-2" type="text" placeholder="please enter your first name"/>
                   <legend>Last name: </legend><input className="form-control mb-2" type="text" placeholder="please enter your last name"/>
                   <legend>Email : </legend> <input className="form-control mb-2" type="email" placeholder="please enter your email"/>
                   <legend>Phone Number : </legend> <input className="form-control mb-2" type="number" placeholder="please enter your phone number"/>

                   <div className="btn btn-danger btn-outline mb-5">Submit</div>
               </div>
            </div>
        </div>
    );
};

export default Contact;