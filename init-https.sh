#!/bin/bash

MKCERT_INSTALLED=$(which mkcert)

if [ -z $MKCERT_INSTALLED ];then 
    brew install mkcert
fi

mkcert -install
mkcert localhost