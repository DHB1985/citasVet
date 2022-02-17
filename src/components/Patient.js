import React from "react";
import { Text, View, Pressable, SafeAreaView } from "react-native";

import { styles } from "../Styles/PatientStyles.js";
import { dateFormat } from "../utils/utils.js";


const Patient = ({
  item,
  setModalVisible,
  editPatient,
  deletePatient,
  setModalDataPatient,
  setPatient,
}) => {
  const { patient, date, id } = item;

  const handleEditPatient = () => {
    setModalVisible(true);
    editPatient(id);
  };

  const handleDataPatientModal = () =>{
    setModalDataPatient(true)
    setPatient(item)
  }

  return (
    <Pressable onLongPress={handleDataPatientModal}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.date}>{dateFormat(date)}</Text>

        <SafeAreaView style={styles.btnContainer}>
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
        </SafeAreaView>
      </SafeAreaView>
    </Pressable>
  );
};

export default Patient;
