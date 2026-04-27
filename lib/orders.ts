import { supabaseAdmin } from "./supabase";
import type { Order } from "@/types";

type OrdersInsert = Omit<Order, "created_at">;

export async function createOrder(data: OrdersInsert): Promise<void> {
  const { error } = await supabaseAdmin.from("orders").insert(data);

  if (error) {
    throw error;
  }
}

export async function updateOrderStatus(
  orderId: string,
  status: Order["status"]
): Promise<void> {
  const { error } = await supabaseAdmin
    .from("orders")
    .update({ status })
    .eq("order_id", orderId);

  if (error) {
    throw error;
  }
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("order_id, email, template_slug, status, created_at")
    .eq("order_id", orderId)
    .maybeSingle<Order>();

  if (error) {
    throw error;
  }

  return data;
}
