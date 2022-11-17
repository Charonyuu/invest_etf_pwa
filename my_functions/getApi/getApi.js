// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')

const handler = async function (event, context) {
  try {
    const response = await fetch('https://mis.twse.com.tw/stock/data/all_etf.txt?1667721106804')
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify( data.a1 ),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
