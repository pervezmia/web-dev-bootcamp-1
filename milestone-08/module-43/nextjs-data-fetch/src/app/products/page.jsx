import Product from "@/components/Product";

const getProducts = async () => {
    const res = await fetch ("http://localhost:5000/products", { next: {revalidate : 20}});
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div className="space-y-2.5 max-w-[90%] mx-auto">
            <h2>Products: {products.length}</h2>
            <div className="grid grid-cols-3 gap-3.5 ">

                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;