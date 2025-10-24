import { model, Schema } from "mongoose";
//şema oluştur
const reviewSchema = new Schema({
    name: {
        type: String,
    },
});
//model oluştur
const Review = model("Review", reviewSchema);
export default Review;
