#!/bin/bash
echo "--> Start building"
makehtml --mode canvas-debug -t . -o wlw.canvas.debug.html wlw.js
echo "--> Done building"
