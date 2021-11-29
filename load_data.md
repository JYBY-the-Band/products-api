# Commands for copying the csvs into psql

## Products
\copy products(id, name, slogan, description, category, default_price) FROM '/home/batman/dev/products-api/data/product.csv' DELIMITER ',' CSV HEADER;

## Styles
\copy styles(id, "ProductId", name, sale_price, original_price, "default") FROM '/home/batman/dev/products-api/data/styles.csv' DELIMITER ',' CSV HEADER NULL AS 'null';

## Features
\copy features(id, "ProductId", feature, value) FROM '/home/batman/dev/products-api/data/features.csv' DELIMITER ',' CSV HEADER;

## Photos
\copy photos(id, "StyleId", photo_url, thumbnail_url) FROM '/home/batman/dev/products-api/data/photos.csv' DELIMITER ',' CSV HEADER;

## Related Item
\copy related_items(id, current_product_id, related_product_id) FROM '/home/batman/dev/products-api/data/related.csv' DELIMITER ',' CSV HEADER;

## SKUs
\copy skus(id, "StyleId", size, quantity) FROM '/home/batman/dev/products-api/data/skus.csv' DELIMITER ',' CSV HEADER;

## Indexing
CREATE INDEX style_product_id_index ON styles ("ProductId");
CREATE INDEX sku_style_id_index ON skus ("StyleId");
CREATE INDEX photo_style_id_index ON photos ("StyleId");
CREATE INDEX feature_product_id_index ON features ("ProductId");
CREATE INDEX current_product_id_index ON related_items (current_product_id);