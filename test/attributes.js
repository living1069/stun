const { attributeType, messageType, attributeValueType } = require('lib/constants')
const StunAttribute = require('lib/attr/stun-attribute')
const StunMessage = require('lib/message')

function createMessage() {
  const message = new StunMessage()

  message.setType(messageType.BINDING_REQUEST)
  message.setTransactionID(Buffer.from('d00558707bb8cc6a633a9df7', 'hex'))

  return message
}

test('support CHANNEL_NUMBER attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.CHANNEL_NUMBER, 1)

  expect(attribute.valueType).toEqual(attributeValueType.UINT32)
})

test('support LIFETIME attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.LIFETIME, 1)

  expect(attribute.valueType).toEqual(attributeValueType.UINT32)
})

test('support XOR_PEER_ADDRESS attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.XOR_PEER_ADDRESS, '127.0.0.1', 1234)

  expect(attribute.valueType).toEqual(attributeValueType.XOR_ADDRESS)
})

test('support DATA attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.DATA, 'abcd')

  expect(attribute.valueType).toEqual(attributeValueType.BYTE_STRING)
})

test('support XOR_RELAYED_ADDRESS attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.XOR_RELAYED_ADDRESS, '127.0.0.1', 1234)

  expect(attribute.valueType).toEqual(attributeValueType.XOR_ADDRESS)
})

test('support EVEN_PORT attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.EVEN_PORT, 'abcd')

  expect(attribute.valueType).toEqual(attributeValueType.BYTE_STRING)
})

test('support REQUESTED_TRANSPORT attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.REQUESTED_TRANSPORT, 1)

  expect(attribute.valueType).toEqual(attributeValueType.UINT32)
})

test('support DONT_FRAGMENT attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.DONT_FRAGMENT)

  expect(attribute.valueType).toEqual(attributeValueType.BYTE_STRING)
})

test('support RESERVATION_TOKEN attribute', () => {
  const message = createMessage()
  const attribute = message.addAttribute(attributeType.RESERVATION_TOKEN)

  expect(attribute.valueType).toEqual(attributeValueType.BYTE_STRING)
})
