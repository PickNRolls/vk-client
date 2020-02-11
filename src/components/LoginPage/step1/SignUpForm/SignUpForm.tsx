import * as React from 'react';
import {
  withFormik,
  FormikProps,
  Form,
  Field,
  FieldProps
} from 'formik';
import * as Yup from 'yup';

import FormikInput from '../../Input';
import Select, { Props as SelectProps } from './Select';
import Button from '../../../Button';

import BaseProps from '../../../../typing/BaseProps';
import { Option, SubmitValues } from './types';
import ValuesState from './types';
import cn from 'classnames';
import monthLength, { monthSequence } from './monthsMeta';
import toFixedNumString from '../../../../helpers/toFixedNumString';
import I18N from '../../../../helpers/i18n';
import globalKeyset from '../../../../i18n';
import localKeyset from './i18n';

import css from './SignUpForm.css';

interface Props extends BaseProps {
  onSubmit: (data: SubmitValues) => void;
};

const FormikSelect = ({
  field,
  form: { touched, errors, setFieldTouched, setFieldValue, isValid },
  ...props
}: FieldProps & SelectProps) => {
  return <Select
    {...field}
    onBlur={() => {
      setFieldTouched(field.name, true);
    }}
    onChange={value => {
      if (!value) {
        setFieldValue(field.name, value);
        setFieldTouched(field.name, true);
        return;
      }

      switch (field.name) {
        case 'day': {
          setFieldValue(field.name, toFixedNumString(value, 2));
          break;
        }

        case 'month': {
          setFieldValue(field.name, toFixedNumString(
            monthSequence.findIndex(month => month === value) + 1,
            2
          ));
          break;
        }

        case 'year': {
          setFieldValue(field.name, value);
          break;
        }

        default: break;
      }
    }}
    placeholder={props.placeholder}
    options={props.options}
    className={props.className}
    error={touched[field.name] && errors[field.name] ?
      errors[field.name] as string : ''
    }
  />;
};

const dayOptions: Option[] = [];
for (let i = 1; i <= 31; i++) {
  dayOptions.push({
    value: i.toString(),
    text: i.toString()
  });
}

const monthOptions: Option[] = Object.keys(monthLength).map(month => {
  const firstLetter = I18N(globalKeyset, month)[0];
  return {
    value: month,
    text: firstLetter.toUpperCase() + I18N(globalKeyset, month).slice(1)
  };
});

const yearOptions: Option[] = [];
for (let i = 2019; i > 1919; i--) {
  yearOptions.push({
    value: i.toString(),
    text: i.toString()
  });
}

const SignUpForm = (props: Props & FormikProps<ValuesState>) => {
  const cSignUpForm = cn(css.SignUpForm, props.className);

  return (
    <div className={cSignUpForm}>
      <h3 className={css.Title}>{I18N(localKeyset, 'title')}</h3>
      <h5 className={css.Subtitle}>{I18N(localKeyset, 'subtitle')}</h5>

      <Form>
        <Field
          name="firstName"
          placeholder={I18N(localKeyset, 'first-name')}
          component={FormikInput}
        />

        <Field
          name="lastName"
          placeholder={I18N(localKeyset, 'last-name')}
          component={FormikInput}
        />

        <div className={css.Birthday}>
          <Field
            name="day"
            placeholder={I18N(localKeyset, 'birthday-day')}
            component={FormikSelect}
            className={css.DaySelect}
            options={dayOptions}
          />

          <Field
            name="month"
            placeholder={I18N(localKeyset, 'birthday-month')}
            component={FormikSelect}
            className={css.MonthSelect}
            options={monthOptions}
          />

          <Field
            name="year"
            placeholder={I18N(localKeyset, 'birthday-year')}
            component={FormikSelect}
            className={css.YearSelect}
            options={yearOptions}
          />
        </div>

        <Button className={css.Submit} type="submit">
          {I18N(localKeyset, 'continue-sign-up')}
        </Button>
      </Form>
    </div>
  );
};


const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, I18N(globalKeyset, 'maxLength'))
    .required(I18N(globalKeyset, 'required')),

  lastName: Yup.string()
    .max(50, I18N(globalKeyset, 'maxLength'))
    .required(I18N(globalKeyset, 'required')),

  day: Yup.string()
    .required(),

  month: Yup.string()
    .required(),

  year: Yup.string()
    .required()
});

const SignUpFormWithFormik = withFormik<Props, ValuesState>({
  mapPropsToValues() {
    return {
      firstName: '',
      lastName: '',
      day: '',
      month: '',
      year: ''
    };
  },

  validationSchema: SignUpSchema,

  handleSubmit(values, { props }) {
    const date = new Date(
      `${values.year}-${values.month}-${values.day}`
    );

    const submittingData = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthday: date
    };

    props.onSubmit(submittingData);
  }

})(SignUpForm);

export default SignUpFormWithFormik;
