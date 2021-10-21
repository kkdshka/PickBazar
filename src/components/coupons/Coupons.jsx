import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoupons, fetchCoupons } from "../../store/couponsSlice";
import "./Coupons.scss";
import { Coupon } from "./Coupon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 3,
  },
};

export const Coupons = () => {
  const dispatch = useDispatch();
  const coupons = useSelector(getCoupons);
  const couponsStatus = useSelector((state) => state.coupons.status);

  useEffect(() => {
    if (couponsStatus === "idle") {
      dispatch(fetchCoupons());
    }
  }, [couponsStatus, dispatch]);

  return (
    <div className="coupons_container">
      <Carousel responsive={responsive} infinite={true}>
        {coupons.length > 0 &&
          coupons.map((coupon) => (
            <Coupon responsive coupon={coupon} key={coupon.id} />
          ))}
      </Carousel>
    </div>
  );
};
