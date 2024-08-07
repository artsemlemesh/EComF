import { useContext, useRef } from "react";
import useOutsideClick from "./outsideClick";
import { GlobalContext } from "../../GlobalContext";

const ProductDetail = () => {
  const { showDetail, detail, addToCart, setShowDetail } =
    useContext(GlobalContext);

  const ref = useRef();

  useOutsideClick(ref, () => setShowDetail(false));

  return (
    <>
      {showDetail && (
        <div ref={ref} className="product_detail">
          <div className="container">
            <div className="img_box">
              <img src={detail.image} alt="img" />
            </div>
            <div className="info">
              <h4># {detail.category}</h4>
              <h2>{detail.name}</h2>
              <p>{detail.type}</p>
              <h3>${detail.price}</h3>
              <button onClick={() => addToCart(detail)}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
