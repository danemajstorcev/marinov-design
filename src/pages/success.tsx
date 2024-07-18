import { GetTotalCostContext } from "@/context/GetTotalCostContext";
import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";

const Success: NextPage = () => {
  const { savedTotalCost } = useContext(GetTotalCostContext);

  return (
    <main className="success-container">
      <div className="container d-flex flex-column align-items-center">
        <div className="img-container">
          <Image
            src="/images/home_page/lucide_check_circle.png"
            alt="check mark"
            width={100}
            height={100}
          />
        </div>
        <div className="content">
          <div className="payment-info">
            <h1>Payment Successful</h1>
            <p>
              Amount Paid: <span>&euro; {savedTotalCost}</span>
            </p>
          </div>
          <div className="payment-desc">
            <h2>Thank you for your order!</h2>
            <p>
              Your payment was processed successfully. A confirmation email has
              been sent to your email address.
            </p>
          </div>
          <div className="return-home d-flex justify-content-start">
            <div className="link d-flex align-items-end">
              <div className="img-container">
                <Image
                  src="/images/home_page/shevron-right-icon.svg"
                  alt="icon pointing right"
                  width={20}
                  height={20}
                />
              </div>
              <Link href={"/"}>
                Return to <span className="d-block">Home Page</span>
              </Link>
            </div>
            <div className="decoration">
              <div className="wrapper d-flex">
                <div className="img-container">
                  <Image
                    src="/images/home_page/tree.png"
                    alt="image of a tree"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="img-container">
                  <Image
                    src="/images/home_page/cart-butterfly-icon.svg"
                    alt="image of a butterfly"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Success;
