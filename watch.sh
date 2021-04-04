#!/bin/sh

# FROM: github.com/jeswin/bash-snippets/watch

killall http-server
http-server build/ &
while inotifywait -r -e modify -e create src; do
  npm run build-html
  killall http-server
  http-server build/ &
done
