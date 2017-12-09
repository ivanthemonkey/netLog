import pifacedigitalio

pfd = pifacedigitalio.PiFaceDigital() # creates a PiFace Digtal object

pfd.output_pins[6].value = 1
pfd.output_pins[6].turn_off()
