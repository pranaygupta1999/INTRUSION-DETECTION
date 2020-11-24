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
    #For Normal results
    a = random.randint(1, 40)
    b = random.randint(a,250)
    # #For Malicious Results
    # a = random.randint(1, 200)
    # b = random.randint(a,a+10)
    print("UI-DATA",a, b)
    time.sleep(5)