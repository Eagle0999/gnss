import georinex as gr
from matplotlib.pyplot import figure, show
import xarray as xr
import sys
import json 
#return print(sys.argv[2])
import pymongo
from bson import json_util
from datetime import datetime

def load_rinex(obses, signals, satelites):
    data = {}
    #data = []
    id = 1
    tmp = []
    web_signals = {}
    web_signals['epoch_date'] = []
    #for index, satelite in enumerate(satelites):
        #web_signals[satelite] = {}
    #satelites = ['we3','rt5']
    #signals = ['wsdfsd','1111']
    #ij = 0
    for satelite in satelites:
        web_signals[satelite] = {}
        for indexx, signal in enumerate(signals):
            web_signals[satelite][signal] = []
        #web_signals[satelite]['epoch_date'] = []    
            #web_signals[satelite][signal].append(ij)
            #ij+=1
        #web_signals[satelite]['epoch_date'] = []
    #print(web_signals)
            #web_signals[satelite].append({
               #signal: [],
                #'epoch_date': []
                #})
            #web_signals[satelite].append({signal : []})
            #web_signals[satelite].append({'epoch_date' : []})
            #web_signals[satelite]['epoch_date'] = []
            #web_signals[satelite][signal] = []
            #web_signals[satelite]['epoch_date'] = []
            #web_signals[satelite] = {
                #signal: [],
                #'epoch_date': []
            #}
    for indd, obs in enumerate(obses):
        #for signal in signals:
        for satelite in satelites:    
            #for satelite in satelites:
            for signal in signals:
                tmp_date = obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['time']['data']
                #print(type(tmp))
                for ind, time in enumerate(tmp_date):
                    #tmp_date[ind] = tmp_date[ind].strftime("%Y/%m/%d %H:%M:%S")#.replace('\r\n/',' ')
                    #web_signals[satelite]['epoch_date'].append(tmp_date[ind])
                    tmp.append(tmp_date[ind].strftime("%Y/%m/%d %H:%M:%S"))
                
                tmp_signals = obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['data']
                for ind, sign in enumerate(tmp_signals):
                    web_signals[satelite][obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name']].append(tmp_signals[ind])
                web_signals[satelite][obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name']] = list(dict.fromkeys( web_signals[satelite][obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name']]))
                    #obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['time']['data'] = time.strftime("%Y/%m/%d %H:%M:%S")#.replace('\r\n/',' ')
                    #print(tmp_date[id])
                #obs[signal].sel(sv = satelite).dropna(dim='time',how='all').plot()
                #data.append([
                    #obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['sv']['data'],
                    #obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name'],
                    #obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['time']['data'],
                    #obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['data']
                    #])
                #print(obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['time']['data'])
                #data['id_'+str(id)] = {
                    #'name_satelite': obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['sv']['data'],
                    #'type_signal': obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name'],
                    #'epoch_date_values': obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['coords']['time']['data'],
                    #'epoch_date_values': time,
                    #'epoch_date_values': tmp_date,
                    #'type_signals_values':obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['data']
                #}
                #web_signals[satelite][obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name']].append(obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['data'])
                #web_signals[satelite][obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['name']].append(obs[signal].sel(sv = satelite).dropna(dim='time',how='all').to_dict()['data'])
                
                #web_signals[satelite]['epoch_date'].append(tmp_date)
                #web_signals['epoch_date'].append(tmp_date)
                #id+=1
                #show()
                #obs.to_netcdf(signal+'_'+satelite+'.nc')
   
    tmp = list(dict.fromkeys(tmp))
    web_signals['epoch_date']=tmp
    json_object = json.dumps(web_signals) 
    print(json_object)
    '''
    print("<ul id='rinex'>")
    #data=''
    for index,item in enumerate(data):
        print('<ul id=',"rinex style='margin:20px;'",index,'>')
        for index2, item2 in enumerate(data[index]):
            print('<li>&nbsp;&nbsp;&nbsp;',data[index][item2],'&nbsp;&nbsp;&nbsp;</li>' )
            #data = data[index][item2])
            #for index3, item3 in enumerate(data[index][item2]):
                #print('<li>&nbsp;&nbsp;&nbsp;',data[index][item2][index3],'&nbsp;&nbsp;&nbsp;</li>' )
        print('</ul>')
    print('</ul>')
    #print(data['sv'])
    print(data[0]['coords']['sv']['data']) # current satelite's name 
    print(data[0]['data']) # All values for types of signal GNSS of current satelite's name 
    print(data[0]['name']) # Current name type of signal GNSS of current satelite's name 
    print(data[0]['coords']['time']['data']) # Current name epoch data of current satelite's name 
    '''
if __name__ == "__main__":
    
    
    #print('<h1>'+rinexFilesNamesIn[0]+'</h1>')
    #print('<h1>'+rinexFilesNamesIn[1]+'</h1>')

    try:
        #obses = {}
        obses = []
        #rinexFilesNamesIn = [
         #'D:\\PASKO\\GNSS\\node.js\\gnss\\data\\rinex\\01-Sigma-G3T_test-copy.obs',
         #'D:\\PASKO\\GNSS\\node.js\\gnss\\data\\rinex\\01-Sigma-G3T_test.obs'
         #]
        #signals = ['L1C','L1P', 'L2C', 'L2P'];
        #satelites = ['R24'] 
        
        rinexFilesNamesIn = sys.argv[1].split(',')
        signals = sys.argv[2].split(',')
        satelites = sys.argv[3].split(',')  
        #print(rinexFilesNamesIn)
        
        if not rinexFilesNamesIn:
            print('Данные об входных файлах Rinex, сигналах, спутниках не были переданы в обработку')
        for fileRinex in rinexFilesNamesIn:
            #obses[fileRinex.split('\\')[-1]] =  gr.load(fileRinex).to_dict()   
            obses.append(gr.load(fileRinex))
            
        load_rinex(obses,signals, satelites)
        #print(obses)
        #for item in obses:
            #for index, item2 in enumerate(dir(item)):
                #print(str(index)+') '+ item2)
        #json_object = json.dumps(obses, indent = 4) 
        #json_object = json.dumps(obses, indent = 0, default=json_util.default)
        #print(obses)
        
        
    except Exception as err:
        print(err)


