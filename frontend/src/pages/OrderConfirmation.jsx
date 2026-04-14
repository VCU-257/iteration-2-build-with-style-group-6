import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          
          <h2 className="mb-5 display-6 text-success fw-bold">Order Confirmed!</h2>
          <p className="lead text-muted mb-5">Your order #12345 has been placed successfully.</p>
          
          {/* 1. Confirmation Summary Card */}
          <div className="card mb-5 shadow text-start">
            <div className="card-body p-4">
              <h5 className="card-title h6 text-uppercase text-muted">Confirmation Summary</h5>
              
              <dl className="row mb-0 mt-3 border-bottom pb-3 mb-3">

                {/* Item List */}
                <dt className="col-sm-8 fw-normal text-muted">Painting</dt>
                <dd className="col-sm-4 text-end">$67.00</dd>

                <dt className="col-sm-8 fw-normal text-muted">Giant Metal Sculpture</dt>
                <dd className="col-sm-4 text-end">$1000.00</dd>

                {/* Shipping and Total */}
                <dt className="col-sm-6 text-muted mt-2 border-top pt-2">Shipping:</dt>
                <dd className="col-sm-6 text-end mt-2 border-top pt-2">Free</dd>

                <dt className="col-sm-6 fw-bold pt-2 mt-2">Total:</dt>
                <dd className="col-sm-6 text-end fw-bold pt-2 mt-2">$1067.00</dd>
              </dl>

              <div className="mb-3 border-bottom pb-3">
                <h6 className="text-muted text-uppercase small">Address</h6>
                <p className="mb-0">123 ABC Street<br />Neverland, OH 23220</p>
              </div>

              <div className="mb-0">
                <h6 className="text-muted text-uppercase small">Time of Arrival</h6>
                <p className="mb-0">Estimated: Friday, Oct 13th</p>
              </div>
              
            </div>
          </div>

          {/* 2. Continue Shopping Button */}
          <div className="d-grid gap-2">
            {/* link to home*/}
            <Link to="/" className="btn btn-primary btn-lg">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  )
}