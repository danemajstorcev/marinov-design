import AddToCartModal from "@/components/AddToCartModal";
import Breadcrumbs from "@/components/BreadCrumbs";
import Maintenance from "@/components/Maintenance";
import ProductSameCategoryCard from "@/components/ProductSameCategoryCard";
import { FavoritesAndBasketContext } from "@/context/BasketContextConstructor";
import { ToggleAddToCartModalContext } from "@/context/ToggleAddToCartModal";
import { ProductTypes } from "@/types";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

interface Props {
  product: ProductTypes;
}

const ProductsDetail: NextPage<Props> = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [filteredData, setFilteredData] = useState<ProductTypes[]>([]);

  const { toggle, toggleAddToCart } = useContext(ToggleAddToCartModalContext);
  const {
    favorites,
    basket,
    handleAddFavorite,
    handleRemoveFavorite,
    handleAddToBasket,
  } = useContext(FavoritesAndBasketContext);

  const isFavorite = favorites?.find((fav) => fav.id === product.id);
  const isAddedToBasket = basket?.find((item) => item.id === product.id);

  // Fetching same category products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const filteredProducts = data.filter(
          (prod: ProductTypes) => prod.category === product.category
        );
        setFilteredData(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [product.category]);

  // Image carousel functions
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Quantity functions
  const handlePlusProductQuantity = () => {
    if (product.inStock && productQuantity < +product.quantity) {
      setProductQuantity((prev) => prev + 1);
    }
  };

  const handleMinusProductQuantity = () => {
    if (product.inStock && productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };

  const toggleModal = () => {
    toggleAddToCart(!toggle);
  };

  return (
    <div className="main">
      <div className="container-fluid position-relative">
        <div className="row">
          {/* Render modal if toggle is true */}
          {toggle && <AddToCartModal title={product.name} closeModal={toggleModal} />}

          {/* Render discount if product has discount */}
          {product.discount.isDiscounted && (
            <span className="discounted-price">- {product.discount.discount_price}%</span>
          )}

          {/* Main image with carousel arrows */}
          <div className="col-12 px-0 position-relative">
            <Image
              src={product.images[currentIndex]}
              alt={product.name}
              width={600}
              height={600}
            />
            <Image
              src="/icons/leftArrow.png"
              className="left-arrow-detail"
              alt="leftArrow"
              onClick={goToPrevious}
              width={24}
              height={24}
            />
            <Image
              src="/icons/rightArrow.png"
              className="right-arrow-detail"
              alt="leftArrow"
              onClick={goToNext}
              width={24}
              height={24}
            />
          </div>

          {/* Image navigation dots */}
          <div className="col-6 offset-3">
            <div className="d-flex justify-content-center align-items-center py-3 py-2 circles-container">
              {product.images.map((_, index) => (
                <Image
                  key={index}
                  onClick={() => goToSlide(index)}
                  src={index === currentIndex ? "/icons/bigCircle.svg" : "/icons/smallCircle.svg"}
                  className="circles text-center mr-2"
                  alt="circle"
                  width={12}
                  height={12}
                />
              ))}
            </div>
          </div>

          {/* Breadcrumbs */}
          <Breadcrumbs
            home="Home"
            type={capitalizeFirstLetter(product.type)}
            category={capitalizeFirstLetter(product.category)}
            name={capitalizeFirstLetter(product.name)}
          />

          {/* Product details and actions */}
          <div className="col-12">
            <h2>{product.name}</h2>
            <h5 className={`${product.discount.isDiscounted ? "line-through mr-2" : ""}`}>
              &euro;{product.price}
            </h5>
            {product.discount.isDiscounted && (
              <h5 className="calculated-discounted-price d-inline">
                &euro;{product.price - (product.price * product.discount.discount_price) / 100}
              </h5>
            )}
          </div>

          {/* Quantity and favorite controls */}
          <div className="col-6">
            <div className={`add-quantity px-5 d-flex align-items-center justify-content-around my-3 ${!product.inStock && "opacity-1"}`}>
              <span className="px-3 border-right" onClick={handlePlusProductQuantity}>+</span>
              <span className="px-3 border-right">{productQuantity}</span>
              <span className="px-3" onClick={handleMinusProductQuantity}>-</span>
            </div>
          </div>
          <div className="col-6">
            <div className="favorites d-inline" onClick={() => isFavorite ? handleRemoveFavorite(product) : handleAddFavorite(product)}>
              <Image
                className="d-inline mr-1"
                src={isFavorite ? "/icons/dark-heart.png" : "/icons/heart.png"}
                style={{ width: "30px" }}
                alt="heart"
                width={isFavorite ? 30 : 40}
                height={isFavorite ? 30 : 40}
              />
              <p className="d-inline">Save for later</p>
            </div>
          </div>

          {/* Add to cart button */}
          <div className="col-12 mt-2 mb-5">
            <div className={`add-to-card text-center p-2 ${!product.inStock && "opacity-1"}`}>
              {isAddedToBasket ? (
                <p className="mb-0">Added to the cart</p>
              ) : (
                <>
                  {product.inStock ? (
                    <p className="mb-0" onClick={() => {
                      handleAddToBasket({ ...product, prodQuantity: productQuantity });
                      toggleModal();
                    }}>
                      Add to Cart
                    </p>
                  ) : (
                    <p className="mb-0">Out of stock</p>
                  )}
                </>
              )}
            </div>
            {!product.inStock && (
              <div className="my-2">
                <span className="d-block mb-3">
                  Unfortunately, this item has been sold. But all is not lost! Write to us and we’ll do our best to replicate it for you!
                </span>
                <Link href={"/customOrders"} className="request-order text-center font-weight-bold d-block text-dark">Request Custom Order</Link>
              </div>
            )}
          </div>

          {/* Product information */}
          <div className="col-12 mb-4">
            <p>{product.product_info.description}</p>
            <p className="mb-1"><strong className="mr-2">Material:</strong>{product.product_info.material}</p>
            <p className="mb-1"><strong className="mr-2">Dimensions:</strong>{product.product_info.dimensions}</p>
            <p className="mb-1"><strong className="mr-2">Weight:</strong>{product.product_info.weight}</p>
          </div>

          {/* Maintenance section */}
          <Maintenance product={product} />

          {/* Divider */}
          <div className="col-12">
            <p>Follow these tips to maintain the beauty and integrity of your earrings, ensuring they remain a stunning accessory for years to come.</p>
          </div>
          <div className="col-2 offset-5 py-5">
            <Image
              style={{ width: "40px" }}
              src="/images/home_page/leaf_divider.svg"
              className="text-center"
              alt="leaf"
              width={40}
              height={40}
            />
          </div>

          {/* Related products */}
          <div className="col-12">
            <h4 className="px-1 mb-3">You might also like:</h4>
            <ProductSameCategoryCard products={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch("http://localhost:5001/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products: ProductTypes[] = await response.json();
    const paths = products.map((product) => ({ params: { id: product.id.toString() } }));
    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  try {
    const response = await fetch(`http://localhost:5001/products/${params?.id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const product: ProductTypes = await response.json();
    return { props: { product } };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return { props: { product: {} as ProductTypes } };
  }
};
