
build:
	docker-compose build

hash:
	docker run -i --rm -e "SCONE_HASH=1" node10-hello-tls:latest

submit-session:
	curl -v -k -s --cert conf/client.crt --key conf/client-key.key --data-binary @session.yaml -X POST https://0.0.0.0:8081/v1/sessions

cas-las:
	docker-compose up -d cas las

example:
	docker-compose up node

example-debug:
	docker-compose up -d node-debug
	docker exec -it node-example-debug sh

clean:
	docker-compose down

