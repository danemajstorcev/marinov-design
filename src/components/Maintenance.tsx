import React, { useState } from "react";
import { ProductTypes } from "@/types";

interface Props {
  product: ProductTypes;
}

const Maintenance: React.FC<Props> = ({ product }) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  // Ensure product.maintenance_tips is defined and has at least six tips
  const { maintenance_tips } = product;
  if (!maintenance_tips || maintenance_tips.length < 6) {
    return <div>No maintenance tips available for this product.</div>;
  }

  return (
    <div className="col-12">
      <p>
        <strong className="mr-2">
          {maintenance_tips[0].title}:
        </strong>
        {maintenance_tips[0].desc}
      </p>
      <p>
        <strong className="mr-2">
          {maintenance_tips[1].title}:
        </strong>
        {maintenance_tips[1].desc}
      </p>
      <p>
        <strong className="mr-2">
          {maintenance_tips[2].title}:
        </strong>
        {maintenance_tips[2].desc}
      </p>

      {isShown && (
        <>
          <p>
            <strong className="mr-2">
              {maintenance_tips[3].title}:
            </strong>
            {maintenance_tips[3].desc}
          </p>
          <p>
            <strong className="mr-2">
              {maintenance_tips[4].title}:
            </strong>
            {maintenance_tips[4].desc}
          </p>
          <p>
            <strong className="mr-2">
              {maintenance_tips[5].title}:
            </strong>
            {maintenance_tips[5].desc}
          </p>
        </>
      )}

      <p
        className="text-center text-underline"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? (
          <span className="text-danger">- Show less</span>
        ) : (
          <span className="text-success">+ Show more</span>
        )}
      </p>
    </div>
  );
};

export default Maintenance;
