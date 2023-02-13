import { StyleSheet, View, Pressable } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { buttonStyle } from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white"
  },
  flexContainerColSS: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%"
  }
});

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required")
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerColSS}>
        <FormikTextInput name="username" placeholder="Username" wFull />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry wFull />
        <Pressable style={{ width: "100%" }} onPress={onSubmit}>
          <Text style={{ fontSize: 16, ...buttonStyle.primary }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;