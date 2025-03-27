const express = require("express");
const router = express.Router();

// A basic in-memory array to simulate order storage
const orders = [];

// Get all orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders fetched successfully",
    orders: orders, // returning all orders
  });
});

// Create a new order
router.post("/", (req, res, next) => {
  const order = {
    id: orders.length + 1, // simple ID generator
    name: req.body.name,
    price: req.body.price,
  };
  orders.push(order); // pushing the new order to the in-memory array
  res.status(201).json({
    message: "Order created successfully",
    createdOrder: order,
  });
});

// Get details of a single order
router.get("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;
  const order = orders.find((o) => o.id == orderId); // find order by ID
  if (order) {
    res.status(200).json({
      message: "Order details",
      order: order,
    });
  } else {
    res.status(404).json({
      message: "Order not found",
    });
  }
});

// Update an existing order
router.patch("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;
  const order = orders.find((o) => o.id == orderId);

  if (order) {
    order.name = req.body.name || order.name;
    order.price = req.body.price || order.price;
    res.status(200).json({
      message: "Order updated successfully",
      updatedOrder: order,
    });
  } else {
    res.status(404).json({
      message: "Order not found",
    });
  }
});

// Delete an order
router.delete("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;
  const orderIndex = orders.findIndex((o) => o.id == orderId);

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1); // removing the order from the array
    res.status(200).json({
      message: "Order deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Order not found",
    });
  }
});

module.exports = router;
