import { useState, useEffect } from 'react'
import getAllProducts from 'services/products/get-all-products'
import getProduct from 'services/products/get-product'

const ApiHello = () => {
  const [data, setData] = useState({ name: '' })
  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setData(profile)
      })
    getProduct(
      {
        apiRootUrl: 'http://localhost:5000',
      },
      {
        id: 1,
      },
    )
      .then((res) => console.log(res))
      .catch((error) => {
        console.error('通信に失敗しました', error)
      })

    getAllProducts(
      {
        apiRootUrl: 'http://localhost:5000',
      },
      {},
    )
      .then((res) => console.log(res))
      .catch((error) => {
        console.error('通信に失敗しました', error)
      })
  }, [])
  return <div>hello {data.name}</div>
}

export default ApiHello
