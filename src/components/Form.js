import React, { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "./FormStyles";

const Form = ({ modalVisible }) => {
  const dataPatientStruct = {
    patient: "",
    owner: "",
    email: "",
    telephone: "",
    symptom: "",
  };

  const [dataPatient, setDataPatient] = useState(dataPatientStruct);

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            Nueva {""}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>

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
              maxLength = {10}
            />
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
        </ScrollView>
      </View>
    </Modal>
  );
};

export default Form;
