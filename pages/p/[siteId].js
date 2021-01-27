import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import TextInput from '@/components/UI/TextInput/TextInput';
import ErrorMessage from '@/components/UI/ErrorMessage/ErrorMessage';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback
    }
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
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

const SiteFeedback = ({ initialFeedback }) => {
  return (
    <div className="flex flex-col w-full  mt-0 mb-0 my-auto mx-auto max-w-4xl">
      <Formik
        validationSchema={schema}
        initialValues={{ site: '', link: '' }}
        onSubmit={(values) => {}}
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
            >
              Add comment
            </Button>
          </Form>
        )}
      </Formik>
      {initialFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </div>
  );
};
export default SiteFeedback;
