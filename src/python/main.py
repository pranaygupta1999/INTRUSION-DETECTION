'''
@author Pranay Gupta
@created 3 Nov 2020
'''
import pyshark
import os
import psutil
import glob
import sys


current_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_dir) #change current dir to this file
print("Current dir is",current_dir)
addrs = psutil.net_if_addrs()

# Works only in Linux(mostly GNOME only)
# If the following line doesn't work either install zenity `apt install zenity` or hardcode with your interface
interface = os.popen('zenity --list --column="interfaces" --text="Select a interface from where to capture packets" --title="Choose a interface" ' + " ".join(addrs.keys())).read()
interface = interface.strip()


while(True):
    for zippath in glob.iglob(os.path.join(current_dir, '*.csv')):
        os.remove(zippath)
    for zippath in glob.iglob(os.path.join(current_dir+'/Pcaps_Legitimate/', '*.pcap')):
        os.remove(zippath)
    print("running")

    capture = pyshark.LiveCapture(interface=interface, output_file='./Pcaps_Legitimate/new_dump.pcap')
    capture.sniff(packet_count=500)
    os.system("/usr/bin/env python3 CreateData.py") 
    captureFile = open("./features_1.csv")
    captureFile.readline()
    if not ( captureFile.readline() and captureFile.readline() ): # if there are less than 2 lines present
        print("Not predicting")
        continue

    os.system("/usr/bin/env python3 predict.py")
    


