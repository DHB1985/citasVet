import React from "react";
import { Text, View } from "react-native";

import {styles} from './PatientStyles.js'

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
    <View style={styles.container}>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.text}>{patient}</Text>
      <Text style={styles.date}>{dateFormat(date)}</Text>
    </View>
  );
};

export default Patient;
