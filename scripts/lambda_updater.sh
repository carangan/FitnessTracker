#!/bin/bash

cd lambda

zip -r create_user.zip create_user.py

aws lambda update-function-code \
--function-name CreateUser \
--region us-east-2 \
--zip-file fileb://create_user.zip

rm -r create_user.zip

zip -r update_exercises.zip update_exercises.py

aws lambda update-function-code \
--function-name UpdateExercises \
--region us-east-2 \
--zip-file fileb://update_exercises.zip

rm -r update_exercises.zip

