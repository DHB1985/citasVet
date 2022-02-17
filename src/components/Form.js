import React, { useEffect, useState } from "react";

import {
  Modal,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import DatePicker from "react-native-date-picker";

import { styles } from "../Styles/FormStyles";

const Form = ({
  modalVisible,
  closeModal,
  setPatients,
  patients,
  patientToEdit,
  setPatient,
}) => {
  const dataPatientStruct = {
    id: "",
    patient: "",
    owner: "",
    email: "",
    telephone: "",
    date: new Date(),
    symptom: "",
  };

  const [dataPatient, setDataPatient] = useState(dataPatientStruct);

  useEffect(() => {
    if (Object.keys(patientToEdit).length) {
      setDataPatient(patientToEdit);
    }
  }, [patientToEdit]);

  const handleDate = () => {
    //Validaciones (hacer una validacion por cada campo)
    if (
      [
        dataPatient.patient,
        dataPatient.owner,
        dataPatient.email,
        dataPatient.date,
        dataPatient.symptom,
      ].includes("")
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (dataPatient.id) {
      const updatedPatients = patients.map((patientState) =>
        patientState.id === dataPatient.id ? dataPatient : patientState
      );

      setPatients(updatedPatients);
      setPatient({});
    } else {
      const patient = { ...dataPatient, id: Date.now() };
      setDataPatient(patient);
      setPatients([...patients, patient]);
    }

    closeModal();
    setDataPatient(dataPatientStruct);
  };

  const handleClose = () => {
    closeModal();
    setPatient({});
    setDataPatient(dataPatientStruct);
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            {patientToEdit.id ? "Editar" : "Nueva"} {""}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>

          <Pressable style={styles.btnCancel} onLongPress={handleClose}>
            <Text style={styles.btnCancelText}>X cancelar</Text>
          </Pressable>

          <SafeAreaView style={styles.inputContent}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Nombre Paciente..."
              placeholderTextColor={"#666"}
              value={dataPatient.patient}
              onChangeText={(text) =>
                setDataPatient({ ...dataPatient, patient: text })
              }
            />
          </SafeAreaView>

          <SafeAreaView style={styles.inputContent}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Nombre Propietario..."
              placeholderTextColor={"#666"}
              value={dataPatient.owner}
              onChangeText={(text) =>
                setDataPatient({ ...dataPatient, owner: text })
              }
            />
          </SafeAreaView>

          <SafeAreaView style={styles.inputContent}>
            <Text style={styles.label}>e-mail Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="e-mail Propietario..."
              placeholderTextColor={"#666"}
              value={dataPatient.email}
              onChangeText={(text) =>
                setDataPatient({ ...dataPatient, email: text })
              }
            />
          </SafeAreaView>

          <SafeAreaView style={styles.inputContent}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Teléfono Propietario..."
              placeholderTextColor={"#666"}
              value={dataPatient.telephone}
              onChangeText={(text) =>
                setDataPatient({ ...dataPatient, telephone: text })
              }
              maxLength={10}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.inputContent}>
            <SafeAreaView style={styles.dateContent}>
              <Text style={styles.label}>Fecha</Text>
              <DatePicker
                date={dataPatient.date}
                locale="es"
                timeZoneOffsetInMinutes={-180}
                onDateChange={(date) =>
                  setDataPatient({ ...dataPatient, date: date })
                }
              />
            </SafeAreaView>
          </SafeAreaView>

          <SafeAreaView style={styles.inputContent}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              style={[styles.input, styles.symptomInput]}
              keyboardType="default"
              placeholder="Síntomas Paciente..."
              placeholderTextColor={"#666"}
              value={dataPatient.symptom}
              onChangeText={(text) =>
                setDataPatient({ ...dataPatient, symptom: text })
              }
              multiline={true}
              numberOfLines={4}
            />
          </SafeAreaView>

          <Pressable style={styles.btnNewDate} onPress={handleDate}>
            <Text style={styles.btnNewDateText}>
              {patientToEdit.id ? "Editar" : "Agregar"} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default Form;
