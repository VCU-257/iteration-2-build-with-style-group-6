import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fakeOrders = [
      {
        _id: "ORD-001",
        createdAt: "2026-04-15",
        status: "Delivered",
        totalPrice: 180,
        orderItems: [
          { name: "Abstract Sunset", qty: 1, price: 120 },
          { name: "Modern Lines", qty: 1, price: 60 },
        ],
      },
      {
        _id: "ORD-002",
        createdAt: "2026-04-10",
        status: "Shipped",
        totalPrice: 95,
        orderItems: [
          { name: "Minimalist Portrait", qty: 1, price: 95 },
        ],
      },
    ];

    setOrders(fakeOrders);
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Shipped":
        return "primary";
      case "Processing":
        return "warning";
      case "Return Requested":
        return "danger";
      default:
        return "secondary";
    }
  };

  // 🔹 Move to returns (should really be a popup with a full page to fill out to submit a return request)
  const handleReturn = (order) => {
    setOrders((prev) => prev.filter((o) => o._id !== order._id));

    setReturns((prev) => [
      ...prev,
      {
        ...order,
        originalStatus: order.status, // save original
        status: "Return Requested",
      },
    ]);
  };

  // 🔹 Cancel return
  const handleCancelReturn = (order) => {
    setReturns((prev) => prev.filter((o) => o._id !== order._id));

    setOrders((prev) => [
      ...prev,
      {
        ...order,
        status: order.originalStatus || "Delivered",
      },
    ]);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">My Orders</h2>

      {/* ORDERS */}
      {orders.length === 0 ? (
        <div className="alert alert-info">No orders found.</div>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="card mb-4 shadow-sm">
            <div className="card-body">
              
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <strong>Order ID:</strong> {order._id}
                </div>
                <span className={`badge bg-${getStatusBadge(order.status)}`}>
                  {order.status}
                </span>
              </div>

              {/* Date */}
              <div className="text-muted mb-3">
                {new Date(order.createdAt).toLocaleDateString()}
              </div>

              {/* Items */}
              <ul className="list-group mb-3">
                {order.orderItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>
                      {item.name}{" "}
                      <small className="text-muted">x{item.qty}</small>
                    </div>
                    <div>${item.price}</div>
                  </li>
                ))}
              </ul>

              {/* Total + Return */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="fw-bold">
                  Total: ${order.totalPrice}
                </div>

                {order.status === "Delivered" && (
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleReturn(order)}
                  >
                    Return
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}

      {/* RETURNS */}
      <h3 className="mt-5 mb-3">Returns in Progress</h3>

      {returns.length === 0 ? (
        <div className="alert alert-secondary">
          No returns in progress.
        </div>
      ) : (
        returns.map((order) => (
          <div key={order._id} className="card mb-3 border-danger">
            <div className="card-body">
              
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <strong>Order ID:</strong> {order._id}
                </div>
                <span className={`badge bg-${getStatusBadge(order.status)}`}>
                  {order.status}
                </span>
              </div>

              {/* Date */}
              <div className="text-muted mb-2">
                {new Date(order.createdAt).toLocaleDateString()}
              </div>

              {/* Items */}
              <ul className="list-group mb-3">
                {order.orderItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>
                      {item.name}{" "}
                      <small className="text-muted">x{item.qty}</small>
                    </div>
                    <div>${item.price}</div>
                  </li>
                ))}
              </ul>

              {/* Refund + Cancel */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="fw-bold">
                  Refund: ${order.totalPrice}
                </div>

                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleCancelReturn(order)}
                >
                  Cancel Return
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}