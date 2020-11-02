import sys
import time
with open("detect2.txt","w+") as f:
    time.sleep(3)
    f.write("98%")
    print('Hello from Python!')
    f.close()
sys.stdout.flush()