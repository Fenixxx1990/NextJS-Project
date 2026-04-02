export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface IReviewSentResponse {
  _id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
}
