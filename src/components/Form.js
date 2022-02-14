import React, { useEffect, useState } from "react";

import {
  Modal,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import DatePicker from "react-native-date-picker";

import { styles } from "./FormStyles";

const Form = ({
  modalVisible,
  setModalVisible,
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

    setModalVisible(!modalVisible);
    setDataPatient(dataPatientStruct);
  };

  const handleClose = () => {
    setModalVisible(!modalVisible);
    setPatient({});
    setDataPatient(dataPatientStruct);
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
           {patientToEdit.id ? 'Editar' : 'Nueva'} {""}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>

          <Pressable style={styles.btnCancel} onLongPress={handleClose}>
            <Text style={styles.btnCancelText}>X cancelar</Text>
          </Pressable>

          <View style={styles.inputContent}>
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
          </View>

          <View style={styles.inputContent}>
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
          </View>

          <View style={styles.inputContent}>
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
          </View>

          <View style={styles.inputContent}>
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
          </View>

          <View style={styles.inputContent}>
            <View style={styles.dateContent}>
              <Text style={styles.label}>Fecha</Text>
              <DatePicker
                date={dataPatient.date}
                locale="es"
                timeZoneOffsetInMinutes={-180}
                onDateChange={(date) =>
                  setDataPatient({ ...dataPatient, date: date })
                }
              />
            </View>
          </View>

          <View style={styles.inputContent}>
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
          </View>

          <Pressable style={styles.btnNewDate} onPress={handleDate}>
            <Text style={styles.btnNewDateText}>{patientToEdit.id ? 'Editar' : 'Agregar'} Paciente</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default Form;
