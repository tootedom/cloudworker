const { Request, Response, fetch, Headers, freezeHeaders } = require('./runtime/fetch')
const { URL } = require('./runtime/url')
const { ReadableStream, WritableStream, TransformStream } = require('./runtime/stream')
const { FetchEvent } = require('./runtime/fetch-event')
const { TextDecoder, TextEncoder } = require('./runtime/text-encoder')
const { crypto } = require('./runtime/crypto')
const { atob, btoa } = require('./runtime/base64')

class Context {
  constructor (addEventListener, cacheFactory, bindings = {}) {
    Object.assign(this, bindings)
    this.console = console
    this.addEventListener = addEventListener
    this.fetch = fetch
    this.Request = Request
    this.Response = Response
    this.Headers = Headers
    this.URL = URL
    this.ReadbleStream = ReadableStream
    this.WritableStream = WritableStream
    this.TransformStream = TransformStream
    this.FetchEvent = FetchEvent
    this.caches = cacheFactory
    this.TextDecoder = TextDecoder
    this.TextEncoder = TextEncoder
    this.crypto = crypto
    this.btoa = btoa
    this.atob = atob
  }
}

module.exports = {
  Context,
  fetch,
  FetchEvent,
  freezeHeaders,
  Headers,
  Request,
  Response,
  ReadableStream,
  WritableStream,
  TransformStream,
  URL,
  TextDecoder,
  TextEncoder,
  crypto,
  btoa,
  atob,
}
