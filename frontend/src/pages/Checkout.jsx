import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Checkout() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          {/* Main Content Area */}
          <div className="p-4 bg-light border rounded">

            {/* 1. Order Summary Card */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title h6 text-uppercase text-muted">Order Summary</h5>
                <dl className="row mb-0 mt-3">

                  {/* Item List */}
                  <dt className="col-sm-8 fw-normal text-muted">Painting</dt>
                  <dd className="col-sm-4 text-end">$67.00</dd>

                  <dt className="col-sm-8 fw-normal text-muted">Giant Metal Sculpture</dt>
                  <dd className="col-sm-4 text-end">$1000.00</dd>

                  {/* Shipping and Total */}
                  <dt className="col-sm-6 text-muted mt-2 border-top pt-2">Shipping:</dt>
                  <dd className="col-sm-6 text-end mt-2 border-top pt-2">Free</dd>

                  <dt className="col-sm-6 fw-bold border-top pt-2 mt-2">Total:</dt>
                  <dd className="col-sm-6 text-end fw-bold border-top pt-2 mt-2">$1067.00</dd>
                </dl>
              </div>
            </div>

            {/* 2. Checkout Details */}
            <div className="mb-4">
              <h5 className="h6 text-uppercase text-muted mb-3">Address</h5>
              <p className="mb-0">123 ABC Street<br />Neverland, OH 23220</p>
            </div>

            <div className="mb-4">
              <h5 className="h6 text-uppercase text-muted mb-3">Payment Method</h5>
              <dl className="row mb-0">
                <dt className="col-sm-4 text-muted">Card Type:</dt>
                <dd className="col-sm-8">Visa ending in 1234</dd>
              </dl>
            </div>

            <div className="mb-4">
              <h5 className="h6 text-uppercase text-muted mb-3">Time of Arrival</h5>
              <p>Estimated: Friday, Oct 13th</p>
            </div>

            {/* 3. Checkout Button*/}
            <div className="d-grid gap-2 mt-5">
              <Link to="/order-confirmation" className="btn btn-primary btn-lg">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}