import { useWishlistCart } from "../../context/wishlistCartContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [selectAddress, setSelectAddress] = useState(false);
  const {
    wishlistCartState: { cart },
    dispatchWishlistCart,
  } = useWishlistCart();

  let totalCartValue = 0;
  if (cart[0] !== undefined) {
    totalCartValue = cart.reduce(
      (acc, curr) => acc + curr.price * curr.cartQ,
      0
    );
  }

  const loadScript = async (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const paymentHandler = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.info("Failed to payment");
    }
    const options = {
      key: "rzp_test_NU5exBM4BPnBkX",
      currency: "INR",
      amount: amount * 100,
      name: "Rolex Watch center",
      description: "Thank you for purchase",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6YmDozaiZCW6Z7haDgv2meMtpB6FMzYfK1DAVIPE6PUfC9Laoa25kjnK_2VFqKHaX7c&usqp=CAU",
      theme: {
        color: "#2563eb",
      },

      handler: function () {
        cart.map((item) =>
          dispatchWishlistCart({
            type: "REMOVE_FROM_CART",
            payload: item,
          })
        );
        navigate("/");
        toast.success("Order is successfully Placed..");
      },
      prefill: {
        name: "Nikhil",
        contact: "7067304474",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h1 className="text-align margin-bottom-2r">Check-out</h1>
      {cart.length !== 0 ? (
        <div className="MyCart-container flex justify-center positon-relative gap-3r">
          <section className="cart-cate">
            <div className="address-contain">
              <input
                type="radio"
                checked={selectAddress}
                onChange={(e) => setSelectAddress(e.target.checked)}
              />
              <div>
                <h2>Nikhil Malviya</h2>
                <p>M-351 Rajwada Chowk, Indore</p>
                <p>Madhy-Pradesh,India</p>
                <p>Mobile:7067304474</p>
              </div>
            </div>
          </section>
          <section className="pro-detail">
            <h1>Order Summary</h1>
            <hr></hr>
            <h4 className="margin-top-8p">PURCHASE ITEMS</h4>
            <div className="price pro-contain flex-justify-between">
              <p>items</p>
              <p>Price</p>
            </div>
            {cart.map((item) => (
              <div>
                <div className="price pro-contain flex-justify-between">
                  <p>{item.Brand}</p>
                  <p>
                    ({item.cartQ} X {item.price})
                  </p>
                </div>
              </div>
            ))}
            <hr></hr>
            <h4 className="margin-top-8p">PRICE DETAILS</h4>
            <div className="price pro-contain flex-justify-between">
              <p>Total Price</p>
              <p>{totalCartValue}</p>
            </div>
            <div className="delivery pro-contain flex-justify-between">
              <p>Delivery Charges</p>
              <p> ₹0</p>
            </div>
            <div className="total-amount pro-contain flex-justify-between">
              <h3>TOTAL AMOUNT</h3>
              <h3>₹{totalCartValue}</h3>
            </div>
            <button
              className={
                `${selectAddress}` === `true`
                  ? `orderBtn`
                  : `orderBtn disableBtn`
              }
              onClick={() => paymentHandler(totalCartValue)}
            >
              Proceed
            </button>
          </section>
        </div>
      ) : (
        <div className="centerHead">
          <h2>No Order Summary</h2>
        </div>
      )}
    </div>
  );
};
export default Checkout;
