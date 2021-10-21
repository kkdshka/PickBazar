import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoupons, fetchCoupons } from "../../store/couponsSlice";
import "./Coupons.scss";
import { Coupon } from "./Coupon";

export const Coupons = () => {
  const dispatch = useDispatch();
  const coupons = useSelector(getCoupons);
  const couponsStatus = useSelector((state) => state.coupons.status);

  useEffect(() => {
    if (couponsStatus === "idle") {
      dispatch(fetchCoupons());
    }
  }, [couponsStatus, dispatch]);

  console.log(coupons);

  return (
    <div className="coupons_container">
      {coupons.length > 0 &&
        coupons.map((coupon) => (
          <Coupon responsive coupon={coupon} key={coupon.id} />
        ))}
    </div>
  );
};
