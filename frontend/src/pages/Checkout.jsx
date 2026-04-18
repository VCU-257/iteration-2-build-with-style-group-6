import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SectionOutline from '../components/SectionOutline.jsx'

export default function Checkout() {
  return (
      <SectionOutline label="Checkout">
          <div className="card">

              <div class="card-header">
                  <ul class="list-group list-group-flush">
              <li class="list-group-item">
                  <h4>Items</h4>
                <dt class="col-sm-8"> Painting</dt>
                <dd class="col-sm-4"> $67.00 </dd>
                <dt class="col-sm-8"> Giant Metal Sculpture</dt>
                <dd class="col-sm-4"> $1000.00 </dd>
                </li>
                <li class="list-group-item">
                    <h4>Shipping</h4>
                <dt class="col-sm-8"> Free</dt>
                </li>
                <li class="list-group-item">
                  <h4>Address</h4>
                <p>123 ABC Street<br />Neverland, OH 23220</p>

                </li>
                <li class="list-group-item">
                  <h4>Payment Method</h4>
                <dt class="col-sm-8"> Card Type:</dt>
                <dd class="col-sm-4"> Visa ending in 1234 </dd>

                </li>
                <li class="list-group-item">
                  <h4>Estimated Delivery Date</h4>
                <p>Friday, Oct 13th</p>

                </li>
                </ul>
              </div>
          <a class="btn btn-primary" href="/order-confirmation" role="button">Checkout</a>

          </div>



      </SectionOutline>


      )
}