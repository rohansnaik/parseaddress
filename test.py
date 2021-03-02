import postal
import sys
#print (len(sys.argv))
#print (sys.argv[1])
from postal.parser import parse_address
addresses=sys.argv[1].split(";")
parsed_addresses=[]
for address in addresses:
    a=parse_address(address)
    parsed_addresses.append(a)
print(parsed_addresses)
sys.stdout.flush()