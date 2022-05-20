# lightning-channel-id-js
Convert between various channel id formats in Lightning network.

### Usage

```js

npm install lightning-channel-js

const {clnToLnd, lndToCln} = require("lightning-channel-js")

lndToCln("807896954914930688")
clnToLnd("734778:1235:0")

// All of the above should output same result
{
  block: '734778',
  tx: '1235',
  output: '0',
  lnd_notation: '807896954914930688',
  cln_format: '734778:1235:0'
}


```

### Functions

### `lndToCln(channelId : String)`
Converts from LND format to CLN format

### `clnToLnd(channelId : String, marker: String)`
Converts from CLN to LND format. 
Accepts an optional `marker` string, which is used incase your channel format has a different seperator
```
clnToLnd("734778x1235x0","x")
```