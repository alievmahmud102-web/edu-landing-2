export type Template = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  displayPrice: string;
  oldPrice: string | null;
  badge: string | null;
  demoUrl: string;
  features: string[];
  category: string;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type Order = {
  order_id: string;
  email: string;
  template_slug: string;
  status: "pending" | "paid" | "failed";
  created_at: string;
};
