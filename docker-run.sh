#!/bin/sh

docker rm -f nx02-1

docker run -d --name nx02-1 -p 8080:80 nx02

