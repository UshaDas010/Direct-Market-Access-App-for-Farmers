const user = {
    _id: ObjectId,
    role: { type: String, enum: ["farmer", "buyer", "admin"], required: true },
    email: { type: String, unique: true },
    password: String,
    phone: String,
    createdAt: Date,
    updatedAt: Date,// Only for farmers:
    farmId: { type: ObjectId, ref: "Farm" } // Optional link to farm profile
  }