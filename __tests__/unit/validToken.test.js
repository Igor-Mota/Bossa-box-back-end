const { promisify } = require('util')
const jwt = require("jsonwebtoken")
const request = require("supertest")
const app = require('../../src/app')
const truncate = require('../utils/truncate');

describe('Testing if token is vali and password hash', () => {
  beforeEach(async () => {
    await truncate()
  })
  it('should verify if token is valid', async () => {
    let UserResponse = await request(app)
      .post('/createAccount')
      .send({
        name: "twix",
        password: "123456",
        email: "twix@gmail.com"
      })
    UserResponse = null
    const response = await request(app)
      .post('/login')
      .send({
        password: '123456',
        email: 'twix@gmail.com'
      })
    const decoded = await promisify(jwt.verify)(response.body.token, process.env.APP_SECRET)
    expect(decoded.id).toBe(response.body.id)
  })
})
