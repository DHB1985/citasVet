import React from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";
import { styles } from "../Styles/DataPatientModalStyles";
import { dateFormat } from "../utils/utils";

const DataPatientModal = ({ patient, setModalDataPatient, setPatient }) => {
  const handleClose = () => {
    setPatient({})
    setModalDataPatient(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Información <Text style={styles.titleBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          onLongPress={() => handleClose()}
          style={styles.btnClose}
        >
          <Text style={styles.btnCloseText}>Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.content}>

        <View style={styles.field}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{patient.patient}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.value}>{patient.owner}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>e-mail:</Text>
          <Text style={styles.value}>{patient.email}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.value}>{patient.telephone}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.value}>{dateFormat(patient.owner)}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.value}>{patient.symptom}</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default DataPatientModal;
