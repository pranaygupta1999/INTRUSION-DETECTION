import pandas as pd 
import numpy as np
import sklearn
import joblib
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics


filename = 'saved_knn_model.sav'
# load the model from disk
loaded_model = joblib.load(filename)


# importing the test dataset

test_data = pd.read_csv("./features_1.csv")

test_data = test_data.drop(['Label'], axis=1)

result = loaded_model.predict(test_data)
# print(result.shape)
# print(result)

#checking on results
packet_no_attack=[]
packet_no_normal=[]


for i in range(1,len(result)):
    if result[i]==1:
        packet_no_attack.append(i)
    else:
        packet_no_normal.append(i)

if True or len(packet_no_attack) and len(packet_no_attack) > len(packet_no_normal):
    print("UI-DATA", len(packet_no_attack), len(result))
with open("Results_knn.txt","w+") as f:

    f.write("===================================================MODEL USED : KNN==================================================================="+"\n")
    f.write("No. of packets = "+str(test_data.shape[0])+"\n")
    f.write("\n"*2)

    f.write("malware packets============================================::::"+"\n")
    f.write("no of malware packets"+str(len(packet_no_attack))+"\n")
    

    
    for x in packet_no_attack:
        f.write("Malware detected in packet no:"+str(x)+"\n"*2)


    f.write("Normal packets===============================================::::"+"\n")
    f.write("no of normal packets"+str(len(packet_no_normal))+"\n")
    

    for y in packet_no_normal:
        f.write("Normal Packet detected in packet no:"+str(y)+"\n")




    f.close()
