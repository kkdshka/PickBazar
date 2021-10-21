import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoupons, fetchCoupons } from "../../store/couponsSlice";
import "./Coupons.scss";
import { Coupon } from "./Coupon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
