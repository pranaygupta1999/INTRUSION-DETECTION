import sys
import time
# with open("detect2.txt","w+") as f:
#     time.sleep(3)
#     f.write("98%")
#     print('Hello from Python!')
#     f.close()
# sys.stdout.flush()
import random

while(True):
    a = random.randint(1, 800)
    b = random.randint(a,1000)
    print("UI-DATA",a, b)
    time.sleep(5)