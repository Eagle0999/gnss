import georinex as gr
from matplotlib.pyplot import figure, show
import xarray as xr
import sys
import json 
import pymongo
from bson import json_util
from datetime import datetime
import math
if __name__ == "__main__":
    try:
        obses = []
        rinex_data = {}
        rinex_data['satelites'] = []
        rinex_data['signals'] = []
        rinex_data['times'] = []

        #satelites = []
        #signals = []
        #times = []

        #satelites = obs['coords']['sv']['data']
        #signals = list(obs['data_vars'].keys())
        #times = obs['coords']['time']['data']
        #gr.rinexheader('myfile.rnx')
        
    


        rinexFilesNamesIn = sys.argv[1].split(',')
        if not rinexFilesNamesIn:
            print('Данные об входных файлах Rinex, сигналах, спутниках не были переданы в обработку')
        for fileRinex in rinexFilesNamesIn:
            #obses[fileRinex.split('\\')[-1]] =  gr.load(fileRinex).to_dict()  
            obs = gr.load(fileRinex).to_dict()

            for satelite in obs['coords']['sv']['data']:
                #satelites.append(satelite)
                rinex_data['satelites'].append(satelite)

            for signal in obs['data_vars']:
                #signals.append(signal)
                rinex_data['signals'].append(signal)  
            
            for time in obs['coords']['time']['data']:
                #times.append(time.strftime("%Y/%m/%d %H:%M:%S"))
                rinex_data['times'].append(time.strftime("%Y/%m/%d %H:%M:%S"))
            #obses.append(gr.load(fileRinex))
        #rinex_data['satelites'] = list(dict.fromkeys(satelites))
        #rinex_data['signals'] =  list(dict.fromkeys(signals))
        #rinex_data['signals'] =  signals
        #rinex_data['times'] = list(dict.fromkeys(times)) 
        #print(obses)
        json_object = json.dumps(rinex_data) 
        print(json_object)
        #print(rinex_data)

    except Exception as err:
        print(err)

