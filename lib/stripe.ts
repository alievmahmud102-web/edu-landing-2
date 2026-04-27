import Stripe from "stripe";

const stripeConfig = {
  apiVersion: "2024-06-20"
} as unknown as ConstructorParameters<typeof Stripe>[1];

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, stripeConfig);
