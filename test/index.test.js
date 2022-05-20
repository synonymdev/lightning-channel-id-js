/* eslint-env mocha */
'use strict'
const assert = require('assert')
const {clnToLnd, lndToCln} = require("../index")

describe('Channel format converter', () => {

  it("should convert CLN format to LND format",()=>{
      const scid = clnToLnd("734778:1235:0")
      assert(scid.lnd_format === "807896954914930688")
      assert(scid.tx === "1235")
      assert(scid.block ==="734778")
      assert(scid.output === "0")
      assert(scid.cln_format === '734778:1235:0')
  })

  it("should convert CLN format with a marker to LND format",()=>{

    const scid = clnToLnd("734778x1235x0","x")
    assert(scid.lnd_format === "807896954914930688")
    assert(scid.tx === "1235")
    assert(scid.block === "734778")
    assert(scid.output === "0")
    assert(scid.cln_format === '734778x1235x0')
  })

  it("should convert LND format to CLN format",()=>{
    const scid = lndToCln("770826920361984001")
    assert(scid.lnd_format === "770826920361984001")
    assert(scid.tx === "892")
    assert(scid.block === "701063")
    assert(scid.output === "1")
    assert(scid.cln_format === '701063:892:1')
  })
})
