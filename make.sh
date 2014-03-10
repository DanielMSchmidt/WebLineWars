#!/bin/bash

maketzjs --mode canvas -t . -o wlw.canvas.js wlw.js
makehtml --mode canvas -t . -o wlw.canvas.html --code wlw.canvas.js wlw.js
