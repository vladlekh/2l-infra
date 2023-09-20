db.getSiblingDB('admin').auth(process.env.MONGO_USER, process.env.MONGO_PASSWORD);

sh.shardCollection("l2l.products", { provider: 1, providerId: "hashed" });

sh.shardCollection("l2l.images", { provider: 1, providerId: "hashed", product: 1 });