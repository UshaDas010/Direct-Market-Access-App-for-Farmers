const review = {
    _id: ObjectId,
    type: { type: String, enum: ["product", "farm"] },
    productId: { type: ObjectId, ref: "Product" },
    farmId: { type: ObjectId, ref: "Farm" },
    reviewerId: { type: ObjectId, ref: "User" },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: Date
  }