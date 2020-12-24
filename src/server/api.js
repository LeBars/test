import { server } from './backend'
import axios from 'axios'

const usePostmanMock = false
const useLocalMocks = true

useLocalMocks && require('./mockApis')

const testServer = 'http://ENTER_YOUR_TEST_SERVER'
const mockServer = 'https://MOCK_SERVER.mock.pstmn.io'

server.use((req, res) => {
  if (req.accepts('json')) {
    let url = testServer + req.url
    const reqMethod = req.method.toLowerCase()
    axios[reqMethod](url, req.body).then((resp) => {
      res.send(resp.data)
    }).catch((error) => {
      if (usePostmanMock) {
        console.log(error.message, `нет маршрута ${req.url} на ${testServer}. Проверяем на MOCK`)
        url = mockServer + req.url
        axios[reqMethod](url, req.body).then((resp) => {
          res.send(resp.data)
        }).catch((error) => {
          /* Отображается в терминале */
          const msg = `[TEST] нет маршрута ${req.url} на ${mockServer}
          Добавьте новый или измените этот маршрут`
          console.log(error.message, msg)
          res.send(msg)
        })
      }
    })
  }
})
