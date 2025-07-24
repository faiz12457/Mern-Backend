import { Review } from "../models/reviewSchema.js"


const reviews=[
      {
  _id:'6882796edf8d49fe19e2a0f5',
  user:'6881f7dfd5f39ba38fb7f57c',
  product:'680b85d43d86a6b808bc50b0',
  rating: 5,
  comment: 'excellent',
  createdAt: '2025-07-24T18:20:30.809Z',
  __v: 0
},
{
  _id:'6882172af7f190c0d07546bd',
  user:'6881f7dfd5f39ba38fb7f57c',
  product:'680b85ca3d86a6b808bc5048',
  rating: 4,
  comment: 'good product',
  createdAt:'2025-07-24T11:21:14.681Z',
  __v: 0
}
]


export const seedReview=async()=>{
      try { 
         await Review.insertMany(reviews)
         console.log('Reviews Seed Successfully')
      } catch (error) {
           console.log(error);
      }
}