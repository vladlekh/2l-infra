docker compose exec configsvr01 sh -c "mongosh < /scripts/init-config-server.js"

docker compose exec shard01-a sh -c "mongosh < /scripts/init-shard-01.js"

docker compose exec shard02-a sh -c "mongosh < /scripts/init-shard-02.js"

docker compose exec shard03-a sh -c "mongosh < /scripts/init-shard-03.js"

