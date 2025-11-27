const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Apply category-based discount
let discountedCart = cart.map(product => {
    let discount = 0;
    if (product.category === "electronics") discount = 0.10;
    else if (product.category === "fashion") discount = 0.05;
    
    return {...product, discountedPrice: product.price * (1 - discount)};
});

// Calculate total
let total = discountedCart.reduce((sum, p) => sum + p.discountedPrice, 0);

// Extra discount if total > 50000
if (total > 50000) {
    total *= 0.95;
}

// Display summary
console.log("Discounted Cart:", discountedCart);
console.log("Final Total:", total.toFixed(2));
