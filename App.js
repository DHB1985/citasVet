/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
  Modal,
  SafeAreaView,
} from "react-native";
import DataPatientModal from "./src/components/DataPatientModal.js";

import Form from "./src/components/Form.js";
import Patient from "./src/components/Patient.js";

import { styles } from "./styles";

const App = () => {
  //Los Hooks se colocan en la parte superior, dentro de condicionales o después de un return

  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [modalDataPatient, setModalDataPatient] = useState(false);

  const editPatient = (id) => {
    const patientEdit = patients.filter((patient) => patient.id === id);
    setPatient(patientEdit[0]);
  };

  const deletePatient = (id) => {
    Alert.alert(
      "¿Deseas eliminar este paciente?",
      "Un paciente eliminado no se puede recuperar",
      [
        { text: "Cancelar" },
        {
          text: "Si, Eliminar!",
          onPress: () => {
            const updatedPatients = patients.filter(
              (patientState) => patientState.id !== id
            );

            setPatients(updatedPatients);
          },
        },
      ]
    );
    const patientEdit = patients.filter((patient) => patient.id === id);
    setPatient(patientEdit[0]);
  };
  // setTimeout(() => {
  //   setModalVisible(true);
  // }, 3000);

  // console.log(modalVisible);
  //const newDateHandler = () => console.log("diste click...");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {""}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        //onPress={newDateHandler}
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNewDate}
      >
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      {patients.length === 0 ? (
        <Text style={styles.noPatientsText}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.patientsList}
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Patient
                item={item}
                setModalVisible={setModalVisible}
                editPatient={editPatient}
                deletePatient={deletePatient}
                setModalDataPatient={setModalDataPatient}
              />
            );
          }}
        />
      )}

      <Form
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPatients={setPatients}
        patients={patients}
        patientToEdit={patient}
        setPatient={setPatient}
      />

      <Modal visible={modalDataPatient} animationType="fade">
        <DataPatientModal />
      </Modal>
    </SafeAreaView>
  );
};

export default App;

// const styles = StyleSheet.create({
//   titulo: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#374151',
//     fontWeight: '600',
//   },
// }); //Se puede hacer un archivo aparte para tener los estilos en otros lados.

//  <Button
//   title="Nueva Cita"
//   onPress={() => console.log('Presionaste en el boton')}
// />// Se cambia por el pressable
//SafeAreaView ---> // Este componente funciona solo en iOS, en android es lo mismo que tener un View
