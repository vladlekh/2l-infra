db.getSiblingDB('admin').createUser({
    user: process.env.MONGO_USER,
    pwd: process.env.MONGO_PASSWORD,
    roles: [
        {role: 'root', db: 'admin'},
    ],
});

db.getSiblingDB('admin').auth(process.env.MONGO_USER, process.env.MONGO_PASSWORD);

db.getSiblingDB('l2l').createUser({
    user: process.env.MONGO_2L_USER,
    pwd: process.env.MONGO_2L_PASSWORD,
    roles: [
        {role: 'dbOwner', db: 'l2l'},
    ],
});
