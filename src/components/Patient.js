import React from "react";
import { Text, View, Pressable } from "react-native";

import { styles } from "../Styles/PatientStyles.js";

const Patient = ({
  item,
  setModalVisible,
  editPatient,
  deletePatient,
  setModalDataPatient,
}) => {
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

  const handleEditPatient = () => {
    setModalVisible(true);
    editPatient(id);
  };

  return (
    <Pressable onLongPress={() => setModalDataPatient(true)}>
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
            <Text style={styles.btnText} onLongPress={() => deletePatient(id)}>
              Eliminar
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Patient;
