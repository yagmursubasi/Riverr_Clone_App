import { model, Schema } from "mongoose";
//şema oluştur
const gigSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: [true, "Lütfen title alanını belirleyin"],
    },
    description: {
        type: String,
        required: [true, "Lütfen description alanını belirleyin"],
        minlength: [15, "description alanı en az 15 karakter olmalıdır"],
        maxlength: [500, "description alanı en fazla 500 karakter olmalıdır"],
    },
    reviewCount: {
        type: Number,
        default: 0,
    },
    starCount: {
        type: Number,
        default: 0,
    },
    coverImage: {
        type: String,
        required: [true, "Lütfen coverImage alanını belirleyin"],
    },
    images: {
        type: [String],
        required: [true, "Lütfen images alanını belirleyin"],
    },
    category: {
        type: String,
        required: [true, "Lütfen category alanını belirleyin"],
    },
    package_title: {
        type: String,
        required: [true, "Lütfen package_title alanını belirleyin"],
    },
    package_description: {
        type: String,
        required: [true, "Lütfen package_description alanını belirleyin"],
    },
    package_price: {
        type: Number,
        required: [true, "Lütfen package_price alanını belirleyin"],
    },
    package_features: {
        type: [String],
        required: [true, "Lütfen package_features alanını belirleyin"],
    },
    package_duration: {
        type: Number,
        required: [true, "Lütfen package_duration alanını belirleyin"],
    },
    package_revisions: {
        type: Number,
        required: [true, "Lütfen package_revisions alanını belirleyin"],
    },
}, {
    timestamps: true,
});
//model oluştur
const Gig = model("Gig", gigSchema, "gigs");
export default Gig;
