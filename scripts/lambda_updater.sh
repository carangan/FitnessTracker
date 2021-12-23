#!/bin/bash

cd lambda

zip -r lambda_function.zip lambda_function.py




aws lambda update-function-code \
--function-name NewHelloWorld \
--region us-east-2 \
--zip-file fileb://lambda_function.zip

rm -r newHelloWorld.zip