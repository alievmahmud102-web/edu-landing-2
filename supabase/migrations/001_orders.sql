CREATE TABLE IF NOT EXISTS orders (
  order_id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  template_slug TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
