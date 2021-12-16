require('dotenv').config()

const PORT = process.env.PORT
const CONTACT = process.env.CONTACT_URL
const SURVEY = process.env.SURVEY_URL

module.exports = {
  CONTACT,
  SURVEY,
  PORT,
}
