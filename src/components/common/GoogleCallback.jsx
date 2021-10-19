import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authWithGoogle } from "../../store/authSlice";

export function GoogleAuthCallback() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!location) {
      return;
    }

    const { search } = location;
    dispatch(authWithGoogle(search)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        history.push("/");
      }
    });
  }, [location, dispatch, history]);

  return <div />;
}
