import React, { useRef } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from 'yup';
import { mutate } from 'swr';
import { useMutation, useQueryClient } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import Modal from '@/components/UI/Modal/Modal';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';
import TextInput from '@/components/UI/TextInput/TextInput';
import ErrorMessage from '@/components/UI/ErrorMessage/ErrorMessage';

const schema = yup.object({
  site: yup.string().required().min(3),
  link: yup
    .string()
    .required()
    .matches(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
      'must be valid website link www.example.com'
    )
});

const AddSiteModal = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const auth = useAuth();
  const { addToast } = useToasts();
  const formRef = useRef();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (createSiteData) => {
      return createSite(createSiteData);
    },
    {
      onSuccess: () => {
        addToast('Site was added succesfully', {
          appearance: 'success',
          autoDismiss: true
        });
        queryClient.invalidateQueries('sites');
      },
      onError: () => {
        addToast('Ops there was an error, try again', {
          appearance: 'error',
          autoDismiss: true
        });
      }
    }
  );

  const handleSubmitForm = ({ site, link }) => {
    mutation.mutateAsync({
      authorId: auth.user?.uid,
      createdAt: new Date().toISOString(),
      site,
      url: link
    });
  };
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        btnType={BUTTON_CLASS_TYPES.primaryButton}
      >
        {children}
      </Button>

      <Modal
        showModal={showModal}
        formRef={formRef}
        setShowModal={setShowModal}
        title="Add Site"
      >
        <Formik
          validationSchema={schema}
          initialValues={{ site: '', link: '' }}
          onSubmit={(values) => handleSubmitForm(values)}
          innerRef={formRef}
        >
          {(props) => (
            <Form>
              <Field
                id="site"
                label="Site"
                name="site"
                placeholder="My site"
                component={TextInput}
              />
              <ErrorMessage name="site" />
              <Field
                id="link"
                label="Link"
                name="link"
                placeholder="https://website.com"
                component={TextInput}
              />
              <ErrorMessage name="link" />
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddSiteModal;
