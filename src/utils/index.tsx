


const getAllProducts =  async() => {
    const result = await fetch('https://nextjsblogs-blue.vercel.app/api/products', {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })
    return await result.json()
}

export const productModule = {
    getAllProducts
}