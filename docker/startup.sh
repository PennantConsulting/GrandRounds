#!/bin/bash
docker run -it -v ${PWD}/../../src:/usr/src/app -v /usr/src/app/node_modules -p 4200:4200 --rm grand-rounds
