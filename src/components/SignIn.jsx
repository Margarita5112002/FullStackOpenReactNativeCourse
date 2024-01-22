import { Formik } from "formik";
import { View, Pressable } from "react-native";
import Text from "./Text";
import FormikInputText from "./FormikInputText";

const initialValues = {
  user: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikInputText name="user" placeholder="username" />
      <FormikInputText name="password" placeholder="password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }
  return <Formik onSubmit={onSubmit} initialValues={initialValues}>
    {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
  </Formik>;
};

export default SignIn;
