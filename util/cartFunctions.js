// Cookie checker function
// it should regex for negative numbers in the cookie

import Cookies from 'js-cookie';

export function cookieChecker() {
  const re = new RegExp('^-?[0-9]d*(.d+)?$');
  // this regex checks for negative numbers.

  const cartCookie = Cookies.get('cart');

  if (!cartCookie) {
    Cookies.set('cart', JSON.stringify([]), {
      SameSite: 'lax',
      secure: true,
      expires: 1,
    });
  } else if (cartCookie) {
    try {
      JSON.parse(cartCookie);
    } catch (e) {
      console.log(
        'cartFunctions.js - cookieChecker - error with JSON.parse(cartCookie): ',
        e,
      );
      Cookies.set('cart', JSON.stringify([]), {
        SameSite: 'lax',
        secure: true,
        expires: 1,
      });
    }
  } else if (re.test(JSON.parse(cartCookie))) {
    console.log('cartFunctions.js - cookieChecker() - cartCookie was negative');
    Cookies.set('cart', JSON.stringify([]), {
      SameSite: 'lax',
      secure: true,
      expires: 1,
    });
  } else {
    return;
  }
  return;
}

export function getCartCount(cart) {
  if (!cart) {
    return 0;
  } else if (cart.length === 0) {
    return 0;
  } else {
    // the 'cart' parameter is an array of objects
    // each object has a 'quantity' property
    // we want to return the sum of all the quantities
    // in the cart
    let cartCount = 0;
    cart.forEach((product) => {
      cartCount += product.quantity;
    });
    return cartCount;
  }
}

// We want to add a product to the cart, but if the product.id is already in the cart, we want to update the quantity
// of that product.
export function addToCart(cart, product) {
  cookieChecker();
  // check if the product is already in the cart
  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    // if it is, we want to update the quantity and also update the cart cookie
    productInCart.quantity++;
    Cookies.set('cart', JSON.stringify(cart), {
      SameSite: 'lax',
      secure: true,
      expires: 1,
    });
    return cart;
  } else {
    // if it isn't, we want to add it to the cart and also to the cart cookie, using the object structure:
    // {
    //   id: product.id,
    //   quantity: 1,
    // }
    cart.push({
      id: product.id,
      quantity: 1,
    });
    Cookies.set('cart', JSON.stringify(cart), {
      SameSite: 'lax',
      secure: true,
      expires: 1,
    });
    console.log(cart);
    return cart;
  }
}

// and now the inverse for removing a product from the cart
export function minusFromCart(cart, product) {
  cookieChecker();
  // check if the product is already in the cart
  const productInCart = cart.find((item) => item.id === product.id);
  if (!productInCart) {
    return cart;
  }

  // if its quantity is 2 or more, we want to update the quantity and also update the cart cookie,
  // else we just remove the product entirely from the cart and update the cart cookie
  if (productInCart.quantity > 1) {
    productInCart.quantity--;
    Cookies.set('cart', JSON.stringify(cart), {
      SameSite: 'lax',
      secure: true,
      expires: 1,
    });
    return cart;
  } else {
    cart.splice(cart.indexOf(productInCart), 1);
    Cookies.set('cart', JSON.stringify(cart), {
      SameSite: 'lax',
      secure: true,
      expires: 1,
    });
    return cart;
  }
}
