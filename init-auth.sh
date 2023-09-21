docker compose exec configsvr01 sh -c "mongosh < /scripts/init-auth.js"

docker compose exec shard01-a sh -c "mongosh < /scripts/init-auth.js"

docker compose exec shard02-a sh -c "mongosh < /scripts/init-auth.js"

docker compose exec shard03-a sh -c "mongosh < /scripts/init-auth.js"