const express = require('express')
var cors = require('cors') 
//const app = express()
const port = 3000

//app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
  const { name } = req.params
  console.log(name)

  if (name == "dog"){
    res.json({'sound':'멍멍'})
  }else if(name == "cat"){
    res.json({'sound':'야옹야옹'})
  }else if(name == "pig"){
    res.json({'sound':'꿀꿀'})
  } else {
    res.json({'sound':'알수없음'})
  }
  
  //res.send({'sound':'야옹야옹'})
})


//params를 이용한 방법
app.get('/user/:id', (req, res) => {
  const p = req.params
  console.log(p)
  res.send({'id':p.id})
})

//query를 이용한 방법
app.get('/get/:id', (req, res) => {
  const q = req.query
  console.log(q)
  res.send({'id':q})
})

app.get('/dog', (req, res) => {
  res.send({'sound':'멍멍'})
  //res.json({'sound':'멍멍'})
})

app.get('/cat', (req, res) => {
  res.json({'sound':'야옹야옹'})
  //res.send({'sound':'야옹야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
