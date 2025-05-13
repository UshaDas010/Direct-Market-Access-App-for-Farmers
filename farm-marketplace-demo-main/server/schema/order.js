const order = {
    _id: ObjectId,
    buyerId: { type: ObjectId, ref: "User", required: true },
    items: [{
      productId: { type: ObjectId, ref: "Product" },
      quantity: Number,
      priceAtPurchase: Number
    }],
    total: Number,
    status: { 
      type: String, 
      enum: ["pending", "confirmed", "shipped", "delivered", "canceled"],
      default: "pending"
    },
    delivery: {
      method: { type: String, enum: ["pickup", "delivery"] },
      address: { // Only if delivery
        street: String,
        city: String,
        coordinates: [Number]
      },
      scheduledDate: Date
    },
    payment: {
      method: String,
      transactionId: String,
      status: { type: String, enum: ["pending", "completed", "failed"] }
    },
    createdAt: Date
  }