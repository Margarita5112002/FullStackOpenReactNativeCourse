import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import theme from '../theme';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  },
  textInput: {
    borderWidth: 1
  },
  errorInput: {
    borderColor: theme.colors.error
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const inputStyle = [
    styles.textInput,
    showError && styles.errorInput
  ]

  return (
    <>
      <TextInput
        style={inputStyle}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;