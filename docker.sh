#!/bin/sh

docker images build . issues-client
docker images tag issues-client:latest
