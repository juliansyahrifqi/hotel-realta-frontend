import { doRequestGetRegion } from "@/redux/masterSchema/action/regionAction";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { MdAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";


export default function Region() {
  let { region, message, refresh } = useSelector(
    (state: any) => state.regionReducer
  );

  const dispatch = useDispatch();

  const columns = [{ name: "Region ID" }, { name: "Region Name" }];

  useEffect(() => {
    dispatch(doRequestGetRegion());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
  function renderStars(hotel_rating_star: any): React.ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
     nisa sabyan
    </div>
  );
}
