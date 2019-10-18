import React from 'react';
import {
  withFormik,
  FormikProps,
  Form,
  Field
} from 'formik';
import * as Yup from 'yup';

import FormikInput from '../Input';

import ValuesState from './types';
import I18N from '../../../helpers/i18n';
import globalKeyset from '../../../i18n';
import localKeyset from './i18n';
import Button from '../../Button';

interface Props {
  onSubmit: (data: ValuesState) => void;
};

const SignUpForm = (props: Props & FormikProps<ValuesState>) => {
  return (
    <div className="SignUpForm SignUpForm_step_2">
      <Form>
        <Field
          name="email"
          placeholder={I18N(localKeyset, 'email')}
          component={FormikInput}
        />

        <Field
          name="password"
          type="password"
          placeholder={I18N(localKeyset, 'password')}
          component={FormikInput}
        />

        <Button disabled={!props.isValid} type="submit" className="SignUpForm-Submit">
          {I18N(localKeyset, 'submit')}
        </Button>
      </Form>
    </div>
  );
};

const SignUpStep2Schema = Yup.object().shape({
  email: Yup.string()
    .email(I18N(globalKeyset, 'email'))
    .required(I18N(globalKeyset, 'required')),

  password: Yup.string()
    .min(8, I18N(globalKeyset, 'minLength'))
    .required(I18N(globalKeyset, 'required'))
});

const SignUpFormWithFormik = withFormik<Props, ValuesState>({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },

  validationSchema: SignUpStep2Schema,

  handleSubmit(values, { props }) {
    props.onSubmit(values);
  }
})(SignUpForm);

export default SignUpFormWithFormik;
