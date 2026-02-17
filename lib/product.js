export async function getCategoryies() {
    const response = await fetch('https://dummyjson.com/products/categories',{
        cache: 'force-cache',
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    
    return response.json();
};

export async function  getOneCategory(categoryName) {
    const response = await fetch(`https://dummyjson.com/products/category/${categoryName}`, {
        next: { revalidate: 3600 },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    return response.json();
}

export async function getAllProducts(page,limit = 12) {
    const skip = (page - 1) * limit;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function  getOneProduct(id) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function getAlllProductBySearch() {
    const response = await fetch('https://dummyjson.com/products', {
        next: {revalidate: 3600},
    })

    if(!response.ok) {
        throw new Error('Faild To Fetch Product');
    }

    return response.json();
}