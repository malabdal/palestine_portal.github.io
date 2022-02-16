import selenium
from selenium import webdriver
# from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
import time
driver = webdriver.Chrome('./chromedriver')
import pandas as pd
import glob
import os.path
import json


#time.sleep can be edited or replaced by Webdriverwait
#the recent values are for testing purporses

def Upload_Data_as_JSON(URL, New_Name):
    
    time.sleep(2)
    #Reads the URL 
    driver.get(URL)
    
    #Waits till the page loads
    time.sleep(15)
    
    #finds the download button
    s=driver.find_element_by_xpath('/html/body/div/div/div/div[1]/header/div/div/div[2]/div/div[1]/div/button/span[1]/div')
    
    time.sleep(3)
         
    s.click()
    
    #Choose to export the data as excel
    c=driver.find_element_by_xpath('/html/body/div/div/div/div[1]/header/div/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/li[2]/span[1]')
    
    time.sleep(1)
    
    c.click()
    
    print('Downloading Data')
    
    time.sleep(15)
    
    #Specify where the data usually loads and choose the last downloaded file
    # folder_path = r'C:\\Users\\' + User_ID+ '\\Downloads'
    folder_path = '../../Downloads/'

    file_type = '/*xlsx'
    files = glob.glob(folder_path + file_type)
    max_file = max(files, key=os.path.getctime)

    
    #Saving the data as dic instead of excel
    import_file = pd.read_excel(max_file).to_dict()
    print (import_file)
    
    #Save the file as a json with the name you specified
    with open(New_Name+ '.json', 'w') as fp:
        json.dump(import_file, fp)
    
    return import_file

#Add the URLs
URLs=[
    'https://data.unescwa.org/portal/c78f8929-babc-40d9-8d9b-a5438396d3a7', #National Accounts
    'https://data.unescwa.org/portal/37e07376-dcab-4c77-b25d-b63c6c1c0d4b', #Finance
    'https://data.unescwa.org/portal/a2f766e6-f2c0-4444-aa73-ccd0d7abf05d', #Trade
    'https://data.unescwa.org/portal/79a73daa-8d9e-47dd-b1ee-bfed2b22124e', #Transport
    'https://data.unescwa.org/portal/ae81b7b7-05b5-4b39-b87a-1243bef7b232', #Industry
    'https://data.unescwa.org/portal/CPI',                                  #CPI
    'https://data.unescwa.org/portal/a400b071-fd51-4aac-87ae-175627339bdd', #ICP
    'https://data.unescwa.org/portal/gems_data',                            #GEMS
    'https://data.unescwa.org/portal/7bae8f12-f543-407f-9afa-29471d6b7c6d', #Population
    'https://data.unescwa.org/portal/e68647fb-ea6d-488d-a6f5-2024b080c2cc', #Household Budget
    'https://data.unescwa.org/portal/8c972cac-a80c-4bd4-8208-74c6a092e225', #Health
    'https://data.unescwa.org/portal/e7d41253-2cf5-4f3b-ba5f-6c45b8af1f88', #Education
    'https://data.unescwa.org/portal/69b86687-53d8-4c50-b5d7-b6c96df42d0b', #Labor
    'https://data.unescwa.org/portal/e28b867b-13b6-4d97-ad5e-85264879c2ef', #Environment
    'https://data.unescwa.org/portal/ed5c2876-01e0-492b-9fad-49702ec6d934', #Energy
    'https://data.unescwa.org/portal/20aeefda-9ffb-4e8d-bacb-c4207552050a', #Goal_1
    'https://data.unescwa.org/portal/f8d39059-de26-4588-b4e9-315233b2c24b', #Goal_2
    'https://data.unescwa.org/portal/e744bd50-cbc7-4257-a6ef-1f9a16c9a737', #Goal_3
    'https://data.unescwa.org/portal/17714f9a-7f68-49fa-9b97-887c2bb34e40', #Goal_4
    'https://data.unescwa.org/portal/b1291e9b-6463-416a-8f54-679e9b100941', #Goal_5
    'https://data.unescwa.org/portal/2d91aafa-4579-4914-92e0-afb39e322251', #Goal_6
    'https://data.unescwa.org/portal/bda6b4cf-cf0d-4287-aea4-91a8ac85b54b', #Goal_7
    'https://data.unescwa.org/portal/cba674a8-c3a2-411f-b875-d62dc1b2f8f2', #Goal_8
    'https://data.unescwa.org/portal/d4916492-262f-4f23-b23b-2a23ea281bc8', #Goal_9
    'https://data.unescwa.org/portal/bb0bd994-b8c8-4a51-bc28-ff40edc66d8d', #Goal_10
    'https://data.unescwa.org/portal/e36b672b-3225-4936-af63-a9497d91c2b0', #Goal_11
    'https://data.unescwa.org/portal/17cfc4d7-ff81-48ee-b4ca-009f7a54ad39', #Goal_12
    'https://data.unescwa.org/portal/27a5cc60-97ce-4097-82d6-509902c4b5f4', #Goal_13
    'https://data.unescwa.org/portal/df09a60a-4345-48fb-91ed-94bf37f4289d', #Goal_14
    'https://data.unescwa.org/portal/9273282b-c470-414f-898c-cc132b1aaf33', #Goal_15
    'https://data.unescwa.org/portal/b4afab42-96e5-47f0-abfc-f26f7e1d735f', #Goal_16
    'https://data.unescwa.org/portal/cf81c2d5-3012-4050-a5b7-3b977548409c'  #Goal_17
    
    ]

#Names of the new saved data

Names=[
    'National Accounts',
    'Finance',
    'Trade',
    'Transport',
    'Industry',
    'CPI',
    'ICP',
    'GEMS',
    'Population',
    'Household Budget',
    'Health',
    'Education',
    'Labor',
    'Environment',
    'Energy',
    'Goal_1',
    'Goal_2',
    'Goal_3',
    'Goal_4',
    'Goal_5',
    'Goal_6',
    'Goal_7',
    'Goal_8',
    'Goal_9',
    'Goal_10',
    'Goal_11',
    'Goal_12',
    'Goal_13',
    'Goal_14',
    'Goal_15',
    'Goal_16',
    'Goal_17'
    
    ]

   
for i in range(len(URLs)):
    print("Starting with Document: " ,i)
    Upload_Data_as_JSON(URLs[i], Names[i])
    print("Finished document: " , i)



