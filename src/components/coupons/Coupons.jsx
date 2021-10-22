import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCouponsState,
  fetchCoupons,
  couponsStatus,
} from "../../store/couponsSlice";
import Carousel from "react-multi-carousel";
import { Coupon } from "./Coupon";
import "react-multi-carousel/lib/styles.css";
import "./Coupons.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 3,
  },
};

export const Coupons = () => {
  const dispatch = useDispatch();
  const [coupons, status] = useSelector(getCouponsState);

  useEffect(() => {
    if (status === couponsStatus.IDLE) {
      dispatch(fetchCoupons());
    }
  }, [status, dispatch]);

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
