import React from 'react';

function OrderList() {
  const orders = [
    { id: 'AD345Jk758', status: 'In Transit', date: '21 Jan', time: '10:23 AM' },
    { id: 'FR156KL89K', status: 'Checking', date: '22 Jan', time: '11:28 AM' },
    // Adicionar mais pedidos
  ];

  return (
    <div className="order-list">
      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Status: {order.status}</p>
          <p>Date: {order.date}</p>
          <p>Time: {order.time}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
