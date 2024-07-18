import CartProducts from "@/components/CartProducts";
import ContinueShopping from "@/components/ContinueShopping";
import { FavoritesAndBasketContext } from "@/context/BasketContextConstructor";
import React, { useContext } from "react";
import Image from "next/image";

const Cart: React.FC = () => {
  const { basket } = useContext(FavoritesAndBasketContext);

  return (
    <main className="main">
      <div className="cart-container">
        <div className="cart-header">Your Cart</div>
        <ContinueShopping />
        <div className="product-and-price-headers">
          <div className="product-header">Product</div>
          <div className="price-header">Price</div>
        </div>
      </div>

      {basket.length > 0 ? (
        <CartProducts products={basket} />
      ) : (
        <div className="products-container">
          <div className="empty-cart">
            <Image
              src="/images/home_page/bg_spiral_butterfly_home_mobile.svg"
              alt=""
              width={300}
              height={300}
            />
            Your cart is empty
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
