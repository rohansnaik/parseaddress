import requests

url = 'http://localhost:5000/rest/parse/address/json'

params = {"address":"Input Address to parse"}

resp = requests.post(url=url, data=params)
data = resp.json()
print(data)