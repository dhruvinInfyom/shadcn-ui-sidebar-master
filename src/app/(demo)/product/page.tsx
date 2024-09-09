
const ProductData = async () => {
   const response = await fetch("https://dummyjson.com/products")
   return response.json()
}

const page = () => {
    ProductData().then((res) => {
        console.log(res)
    })
  return (
    <div>page</div>
  )
}

export default page