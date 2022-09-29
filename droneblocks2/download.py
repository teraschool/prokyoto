import os
from urllib.request import urlopen

MANIFEST = 'tello.appcache'
BASE_URL = 'https://dev.droneblocks.io/'

with open(MANIFEST) as f:
    for line in f:
        line = line.rstrip()

        if line.startswith('#'):
            continue
        elif line == 'CACHE MANIFEST':
            continue
        elif len(line) == 0:
            continue
        elif line == 'NETWORK:':
            break

        if '/' in line:
            os.system('mkdir -p %s' % line[0:line.rfind('/')])

        with urlopen(BASE_URL + line) as response:
            with open(line, 'wb') as f:
                f.write(response.read())
