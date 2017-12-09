#!/usr/bin/env python

import time
import piface.pfio

piface.pfio.init(False)

led8 = piface.pfio.LED(7)
led8.turn_off()

# vim:ts=2:sw=2:sts=2:et:ft=python
