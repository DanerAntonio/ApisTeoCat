const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseDetailSchema = new Schema({
    purchaseId: { type: Schema.Types.ObjectId, ref: 'Purchase', required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PurchaseDetail', PurchaseDetailSchema);
