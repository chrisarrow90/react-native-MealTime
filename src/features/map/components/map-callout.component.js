import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  console.log(restaurant);
  return <CompactRestaurantInfo restaurant={restaurant} />;
};