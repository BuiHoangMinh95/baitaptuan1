type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Tạo danh sách sản phẩm
const productsList: Product[] = [
  { id: 1, name: "Product1", price: 50, quantity: 2 },
  { id: 2, name: "Product2", price: 120, quantity: 1 },
  { id: 3, name: "Product3", price: 80, quantity: 3 },
  { id: 4, name: "Product4", price: 90, quantity: 2 },
  { id: 5, name: "Product5", price: 110, quantity: 1 },
];

// Sử dụng reduce để tính tổng giá trị (price * quantity) của tất cả sản phẩm trong danh sách
const totalPrice = productsList.reduce((acc, product) => acc + product.price * product.quantity, 0);
console.log("Tổng giá trị của tất cả sản phẩm:", totalPrice);

// Sử dụng filter để lọc ra các sản phẩm có giá lớn hơn 100
const highPriceProducts = productsList.filter((product) => product.price > 100);
console.log("Sản phẩm có giá lớn hơn 100:", highPriceProducts);

// Sử dụng map để tạo một mảng mới chứa các đoạn mô tả sử dụng template literals
const productDescriptions = productsList.map(
  (product) => `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`
);
console.log("Mô tả sản phẩm:", productDescriptions);

// Sử dụng reduce để tính tổng số lượng của tất cả các sản phẩm có giá dưới 100
const totalQuantityUnder100 = productsList
  .filter((product) => product.price < 100)
  .reduce((acc, product) => acc + product.quantity, 0);
console.log("Tổng số lượng của sản phẩm có giá dưới 100:", totalQuantityUnder100);

// Hàm getDiscountedProducts
function getDiscountedProducts(products: Product[], discountRate: number): Product[] {
  return products.map((product) => ({
    ...product,
    price: product.price * (1 - discountRate),
  }));
}

// Sử dụng hàm getDiscountedProducts để giảm giá 10%
const discountedProducts = getDiscountedProducts(productsList, 0.1);
console.log("Danh sách sản phẩm giảm giá:", discountedProducts);
