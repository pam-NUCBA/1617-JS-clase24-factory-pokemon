const totalItems = document.getElementById("totalItems");
const totalProducts = document.getElementById("totalProducts");
const cartWrapper = document.getElementById("cartWrapper");

//ejemplo de un product:
// {
//   product: 'squirtle',
//   price: 200,
//   count: 1
// }

let products = []; //al principio no tenemos productos elegidos
console.log(products)

const setCount = () => {
  let totalCount = 0; //arranca en 0 porque no tiene products

  //recorremos para ver si hay algo en products:
  for (const i in products) {
    totalCount += products[i].count;
  }

  totalItems.innerText = totalCount.toString();
  return totalCount;
};

const totalPrice = () => {
  let totalCart = 0;

  for (const i in products) {
    totalCart += products[i].price * products[i].count;
  }
  totalProducts.innerHTML = totalCart.toString();
  return totalCart;
};

const productsList = () => {
  //agrego el producto al cart
  cartWrapper.innerHTML = products.map((product) => {
    return `
      <div class="cart-item">
        <div class="cart-item-content">
          <span>${product.product}</span>
          <span>Cantidad deseada: ${product.count}</span>
          </div>
            <span> $ ${product.price}</span>
        </div>
      </div>
    `;
  });
};

//el único momento en que llamamos esas 3 funciones de arriba, es cuando hacemos el onclick en los botones
const addProduct = (product, price, count) => {
  console.log(products)
  for (const i in products) {
    //chequeo si hay algo:
    if (products[i].product === product) {
      products[i].count++;
      setCount();
      totalPrice();
      productsList();
      return;
    }
  }
  //si no hay nada, empiezo la lista:
  products.push({ product, price, count });
  setCount();
  totalPrice();
  productsList();
};
