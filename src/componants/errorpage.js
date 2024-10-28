import React from "react";

const Error = () => {
    return (
        <div className="bg-dark vh-100">
            <div className="d-flex align-items-center justify-content-center py-5">
                <div className="bg-white border rounded d-flex align-items-center justify-content-center mx-2 col-md-8">
                    <div className="d-flex flex-column align-items-center py-5">
                        <img className="img-fluid d-none d-md-block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="Page not found" />
                        <img className="img-fluid d-md-none" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="Page not found" />
                        <h1 className="pt-4 pb-2 text-center display-4 text-dark">OOPS!</h1>
                        <p className="pb-4 text-center lead text-muted">No signal here! We cannot find the page you are looking for.</p>
                        <button className="mx-2 btn btn-indigo">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
