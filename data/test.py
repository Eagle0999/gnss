import georinex as gr
from matplotlib.pyplot import figure, show
import xarray as xr
from datetime import datetime
import sys
import json 
import math
if __name__ == "__main__":
    try:
        rinexFilesNamesIn = sys.argv[1].split(',')
        signals = sys.argv[2].split(',')
        satelites = sys.argv[3].split(',')
        times = sys.argv[4].split(',')
        #obses = []
        web_rinex = {}
        web_rinex['epoch_date'] = []
        for satelite in satelites:
            web_rinex[satelite] = {}
            for indexx, signal in enumerate(signals):
                web_rinex[satelite][signal] = []
        tmp_date = []
        
        for index1, fileRinex in enumerate(rinexFilesNamesIn):
            for index2, satelite in enumerate(satelites):
                #obses.append(gr.load(fileRinex, tlim = times,  meas=signals).sel(sv=satelite).to_dict())
                obses = gr.load(fileRinex, tlim = times,  meas=signals).sel(sv=satelite).to_dict()
                #print(obses[index2]['data_vars'])
                
                #for index3, time in enumerate(obses[index2]['coords']['time']['data']):
                for time in obses['coords']['time']['data']:
                    #obses[index2]['coords']['time']['data'][index3] = time.strftime("%Y/%m/%d %H:%M:%S")
                    tmp_date.append(time.strftime("%Y/%m/%d %H:%M:%S"))
            
                for signal2 in obses['data_vars']:
                    #print(obses['data_vars'][signal2]['data']) 
                    for signal3 in obses['data_vars'][signal2]['data']:
                        #for signal4 in signal3:
                        if not math.isnan(signal3):
                            web_rinex[satelite][signal2].append(signal3)


                       
            #web_rinex['epoch_date'] = obses[index1]['coords']['time']['data']
                
        web_rinex['epoch_date'] = list(dict.fromkeys(tmp_date))    
       
            #tmp_date = []
   
        json_object = json.dumps(web_rinex) 
        print(json_object)
        #print(obses)
    except Exception as err:
        print(err)
