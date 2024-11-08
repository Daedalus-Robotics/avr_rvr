import serial
from pynput import keyboard
import time
from serial.tools import list_ports
port = list(list_ports.comports())
for p in port:
    print(p.device)
ser = serial.Serial()  # open first serial port
ser.baudrate = 115200
ser.port = 'COM4'
ser.open()
def keystuff(key):
    try:
        if format(key.char.lower())== "e":
            ser.write("move".encode())
            print("GOOD")

    except:
        print("BAD")


# The event listener will be running in this block
with keyboard.Listener(on_release=keystuff) as listener:
    listener.join()
