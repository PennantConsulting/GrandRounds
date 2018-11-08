#!/bin/bash
cp Dockerfile ../..
cd ../..
docker build -t 'grand-rounds' .
