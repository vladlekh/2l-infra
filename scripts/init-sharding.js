db.getSiblingDB('admin').auth(process.env.MONGO_USER, process.env.MONGO_PASSWORD);

sh.shardCollection("l2l.products", {providerId: "hashed"});