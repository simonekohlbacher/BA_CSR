import ProductList from '../../components/ProductList';

export default async function ProductCategoryPage({ params }) {
    const { category } = params;
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const products = await response.json();

    return (
        <ProductList selectedCategory={category} />
    );
}
