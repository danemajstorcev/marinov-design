import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  closeModal: () => void;
}

const AddToCartModal = ({ title, closeModal }: Props) => {
  const handleOnClick = () => {
    closeModal();
  };
  
  return (
    <div className="cart-modal d-flex flex-column">
      <div
        onClick={handleOnClick}
        className="close-icon-container align-self-end"
      >
        <Image
          src="/images/home_page/close-icon.svg"
          alt="close icon for the modal"
          width={24}
          height={24}
        />
      </div>
      <div className="heading d-flex flex-column align-items-center">
        <h2>{title}</h2>
        <p>has been added to the cart.</p>
        <Image
          src="/images/home_page/cart-butterfly-icon.svg"
          alt="image with a small butterfly"
          width={48}
          height={48}
        />
      </div>
      <div className="func d-flex flex-column">
        <Link href="/cart">Go to Cart</Link>
        <button onClick={handleOnClick} type="button">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default AddToCartModal;
