#!/bin/bash

cd lambda

zip -r newHelloWorld.zip newHelloWorld.py




aws lambda update-function-code \
--function-name NewHelloWorld \
--region us-east-2 \
--zip-file fileb://newHelloWorld.zip

rm -r newHelloWorld.zip