import React from "react";
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
            />
          </View>

          <View style={styles.inputContent}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Nombre Propietario..."
              placeholderTextColor={"#666"}
            />
          </View>

          <View style={styles.inputContent}>
            <Text style={styles.label}>e-mail Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="e-mail Propietario..."
              placeholderTextColor={"#666"}
            />
          </View>

          <View style={styles.inputContent}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Teléfono Propietario..."
              placeholderTextColor={"#666"}
            />
          </View>

          <View style={styles.inputContent}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Síntomas Paciente..."
              placeholderTextColor={"#666"}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default Form;
