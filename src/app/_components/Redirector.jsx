"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import UserContext from "../_contexts/UserContext";

const Redirector = () => {
  const { userDetails } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (!userDetails._id) {
      router.push("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default Redirector;
