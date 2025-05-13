const product = {
    _id: ObjectId,
    farmId: { type: ObjectId, ref: "Farm", required: true },
    name: String,
    category: { type: String, ref: "Category" },
    pricePerUnit: Number,
    unit: String, // "kg", "bunch", "dozen"
    stock: Number,
    harvestDate: Date,
    images: [String],
    organic: Boolean,
    available: Boolean
  }