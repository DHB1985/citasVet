import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F59E0B",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    color: "#FFF",
  },
  titleBold: {
    fontWeight: "900",
  },
  btnClose: {
    marginVertical: 30,
    backgroundColor: "#E06900",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCloseText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  content: {
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "600",
    fontSize: 12,
  },
  value: {
    fontWeight: "700",
    fontSize: 20,
    color: '#334155'
  },
});
