import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import TextInput from '@/components/UI/TextInput/TextInput';
import ErrorMessage from '@/components/UI/ErrorMessage/ErrorMessage';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';
import { useAuth } from '@/lib/auth';
import { createFeedback } from '@/lib/db';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback
    }
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
}

const schema = yup.object({
  comment: yup.string().required().min(3)
});

const SiteFeedback = ({ initialFeedback, siteId }) => {
  const auth = useAuth();
  const router = useRouter();
  const [allFeedback, setAllFeedback] = useState(initialFeedback);
  const { addToast } = useToasts();

  const handleCommentSubmit = async ({ comment }) => {
    const newFeedback = {
      author: auth.user.email,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: comment,
      createdAt: new Date().toISOString(),
      provider: 'github.com', //to check why auth.user is not formated, and provider is not stored in auth.user
      status: 'pending'
    };
    try {
      const feedbackResponseData = await createFeedback(newFeedback);

      setAllFeedback([
        { ...newFeedback, id: feedbackResponseData.id },
        ...allFeedback
      ]);

      addToast('Feedback created', {
        appearance: 'success',
        autoDismiss: true
      });
    } catch (error) {
      addToast('There was an error, please try again!', {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };
  return (
    <div className="flex flex-col w-full  mt-0 mb-0 my-auto mx-auto max-w-4xl">
      <Formik
        validationSchema={schema}
        initialValues={{ comment: '' }}
        onSubmit={(values) => handleCommentSubmit(values)}
      >
        {(props) => (
          <Form>
            <Field
              className=" mt-8"
              id="comment"
              label="Comment"
              name="comment"
              placeholder="Add comment"
              component={TextInput}
            />
            <ErrorMessage name="comment" />
            <Button
              onClick={() => {}}
              btnClassType={BUTTON_CLASS_TYPES.secondaryButton}
              btnType="submit"
              disabled={!props.isValid}
            >
              Add comment
            </Button>
          </Form>
        )}
      </Formik>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </div>
  );
};
export default SiteFeedback;
