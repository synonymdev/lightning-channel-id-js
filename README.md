# lightning-channel-id-js
Convert between various channel id formats in Lightning network.

### Usage

```js

npm install @synonymdev/lightning-channel-id

const parseChannelId = require("lightning-channel-js")

parseChannelId("807896954914930688") // long channel id format
parseChannelId("734778:1235:0") // : seperated
parseChannelId("734778x1235x0") // x seperated 
parseChannelId("734778$1235$0","$) // custom marker

// All of the above should output same result
{
  block: '734778',
  tx: '1235',
  output: '0',
  lnd_notation: '807896954914930688',
  cln_format: '734778:1235:0'
}


