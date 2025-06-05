#!/usr/bin/env bash
# Modify for your specific needs and local code
yarn cache clean

yarn link \
  react \
  react-dom \
  @telicent-oss/ontologyservice;

