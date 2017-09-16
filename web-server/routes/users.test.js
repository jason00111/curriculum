const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('..')

chai.use(chaiHttp)

describe('user routes', () => {
  it('/users succeeds', (done) => {
    chai.request(app)
      .get('/users')
      .end((error, response) => {
        expect(error).to.be.null
        expect(response).to.have.status(200)
        expect(response).to.be.html
        done()
      })
  })

  it('/users/:handle succeeds', (done) => {
    chai.request(app)
      .get('/users/learner1')
      .end((error, response) => {
        expect(error).to.be.null
        expect(response).to.have.status(200)
        expect(response).to.be.html
        done()
      })
  })
})
