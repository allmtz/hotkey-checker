from bs4 import BeautifulSoup
import requests
import pandas as pd
import json

url = ('https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-window-shortcuts')
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')
list = soup.find_all('tr')

arr = []
for input in list:
    key = input.text
    arr.append(key)

secondArr = []
for i in arr:
    secondArr.append(i.replace('\n', ":"))

row = []
row2 = []
for i in secondArr:
    i = i[1:-1]
    i = i.split(':')
    row.append(i[0])
    row2.append(i[1])
row = row[1:]
row2 = row2[1:]


# In[9]:


df = pd.DataFrame({"Command": row, 'Hotkey': row2})
df2 = df.to_json(orient='records')
print(df2)
