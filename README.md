# lightning-channel-id-js
Convert between various channel id formats in Lightning network.

### Usage

```js

npm install @synonymdev/lightning-channel-id

const {fromCln, fromLnd} = require("lightning-channel-js")

fromLnd("807896954914930688")
fromCln("734778:1235:0")

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

### `fromLnd(channelId : String)`
Converts from LND format to CLN format

### `fromCln(channelId : String, marker: String)`
Converts from CLN to LND format. 
Accepts an optional `marker` string, which is used incase your channel format has a different seperator
```
fromCln("734778x1235x0","x")

{
  block: '734778',
  tx: '1235',
  output: '0',
  lnd_format: '807896954914930688',
  cln_format: '734778x1235x0'
}
```