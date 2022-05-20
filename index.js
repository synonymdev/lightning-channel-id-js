'use strict'

const long = require("long")

/**
 * Channel id format converter. 
 * Answer inspired from: https://bitcoin.stackexchange.com/a/79427
 * BOLT:https://github.com/lightning/bolts/blob/8516beb2c4fe6fc19bb4b1824b1635ae13805f49/07-routing-gossip.md#requirements
 */


/**
 * @description Convert C-Lightning notation to LND notation
 * @param {String} chanId Channel id in CLN notation (block:tx:output)
 * @param {string} marker The character seperating between the items.
 * @returns {Object}
 */
function fromCln(chanId, marker){
  if(typeof chanId !== "string") throw new Error("Channel id must be string")
  const chid = chanId.split(marker || ":")
  if(chid.length !== 3) throw new Error("Invalid channel id passed")
  const block = long.fromString(chid[0]).shiftLeft(40)
  const tx = long.fromString(chid[1]).shiftLeft(16)
  const output = chid[2]
  const lnd = block.or(tx).or(output)
  const fmt = fromLnd(lnd.toString())
  fmt.cln_format = chanId
  return fmt
}

/**
 * @description Convert C-Lightning notation to LND notation
 * @param {String} chanId Channel id in LND notation (uint64 string)
 * @returns {Object}
 */
function fromLnd(chanId){
  const block = long.fromString(chanId).shiftRight(40)
  const tx = long.fromString(chanId).shiftRight(16).and(0xFFFFFF)
  const output = long.fromString(chanId).and(0xFFFF)
  return {
    block : block.toString(),
    tx: tx.toString(),
    output: output.toString(),
    lnd_format: chanId,
    cln_format: `${block.toString()}:${tx.toString()}:${output.toString()}`
  } 
}


module.exports = {
  fromCln,
  fromLnd,
}
