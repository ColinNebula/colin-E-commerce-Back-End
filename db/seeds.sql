INSERT INTO category (category_name)
VALUES
  ('Shirts'),
  ('Shorts'),
  ('Hats'),
  ('Shoes');


INSERT INTO tag (tag_name)
VALUES
  ('white');

INSERT INTO product (product_name, price, stock, category_id)
VALUES
  (1, 'Plain T-Shirt', 14.99, 30, 1, 1);

INSERT INTO product_tag (product_id, tag_id)
VALUES
  ('1, 1');
  