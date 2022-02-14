import React from "react";
import { Text, View, Pressable } from "react-native";

import { styles } from "./PatientStyles.js";

const Patient = ({ item, setModalVisible, editPatient }) => {
  const { patient, date, id } = item;

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

  const handleEditPatient = () =>{
    setModalVisible(true);
    editPatient(id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.text}>{patient}</Text>
      <Text style={styles.date}>{dateFormat(date)}</Text>

      <View style={styles.btnContainer}>
        <Pressable 
          style={[styles.btn, styles.btnEdit]}
          onLongPress={handleEditPatient}

        >
          <Text style={styles.btnText}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnDelete]}>
          <Text style={styles.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Patient;
