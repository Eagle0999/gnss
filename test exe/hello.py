import sys
import json
test = sys.argv[1]
#print('hello!!!')
# a Python object (dict):

x = {
  "name": "John",
  "age": 30,
  "city": "New York",
  "test": test
}

# convert into JSON:
y = json.dumps(x)

# the result is a JSON string:
print(y)

#input()