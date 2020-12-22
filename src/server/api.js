import { server, upload } from './backend'
import axios from 'axios'
const serialize = require('serialize-to-js')

const fs = require('fs')
const path = require('path')

const testServer = 'https://TEST_SERVER.ru'
const mockServer = 'https://MOCK_SERVER.mock.pstmn.io'

server.use((req, res) => {
  if (req.accepts('json')) {
    let url = testServer + req.url
    const reqMethod = req.method.toLowerCase()
    axios[reqMethod](url, req.body).then((resp) => {
      // Название файла
      let name = ''
      if (req.url === '/') {
        name = 'Api'
      } else {
        name = req.url.split('?')
        if (name.length > 1) {
          name[name.length - 1] = ''
        }
        name = name.join('').split('/').filter(item => item !== '')
        name = name.map(item => {
          return item.charAt(0).toUpperCase() + item.slice(1)
        })
        name = name.join('')
      }
      const pathFile = `src/server/cashApi/${name}`
      // Создание директории
      fs.mkdir(path.join('src/server', 'cashApi'), { recursive: true }, (err) => {
        if (err) {
          return console.log(err)
        }
      })
      // Проверка на существование файла и на время создания
      fs.stat(pathFile, (err, stats) => {
        if (!err) {
          if (stats.isFile()) {
            const delta = new Date(new Date() - stats.birthtime).getHours()
            if (delta > 24) {
              fs.writeFile(`src/server/cashApi/${name}`, `${resp.data}`, (err) => {
                if (err) {
                  return console.log(err)
                }
              })
            }
          }
        } else {
          // Создание файла
          fs.open(`src/server/cashApi/${name}`, 'w', (err) => {
            if (err) {
              return console.log(err)
            }
          })
          // Запись ответа в файл
          const test = serialize(resp.data)
          fs.writeFile(`src/server/cashApi/${name}`, test, (err) => {
            if (err) {
              return console.log(err)
            }
          })
        }
      })
      res.send(resp.data)
    }).catch((error) => {
      console.log(error.message, `нет маршрута ${req.url} на ${testServer}. Проверяем на MOCK`)
      url = mockServer + req.url
      axios[reqMethod](url, req.body).then((resp) => {
        res.send(resp.data)
      }).catch((error) => {
        // const msg = `[TEST] нет маршрута ${req.url} на ${mockServer}
        // Добавьте новый или измените этот маршрут`
        console.log(error.message)
        let resApi = ''
        fs.readFile(`src/server/cashApi/CatalogApiFilter_fild`, 'utf8', (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          resApi = data
          console.log(data)
        })
        res.send(resApi)
      })
    })
  }
})
