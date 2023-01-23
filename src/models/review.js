const mongoose=require('mongoose')
const reviewSchema=new mongoose.Schema({
    bookId: {type:mongoose.Schema.Types.ObjectId,required:true , ref:"books"},
  reviewedBy: {type:string, required:true, default: 'Guest'},
  reviewedAt: {type:Date, required:true},
  rating: {type:Number, required:true},
  review: {type:String},
  isDeleted: {type:Boolean, default: false},

},{timestamps:true})

module.exports=mongoose.model("review",reviewSchema)



