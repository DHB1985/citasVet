import React from "react";
import { Text, View } from "react-native";

const Patient = ({ item }) => {
  const { patient, date } = item;

  const dateFormat = (date) => {
    const newDate = new Date(date);
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return newDate.toLocaleDateString("es-ES", dateOptions);
  };

  return (
    <View>
      <Text>{patient}</Text>
      <Text>{dateFormat(date)}</Text>
    </View>
  );
};

export default Patient;
