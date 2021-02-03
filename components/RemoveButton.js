import React from 'react';
import Image from 'next/image';
import { useQueryClient, QueryCache } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import { deleteFeedback } from '@/lib/db';
import IconButton from '@/components/UI/Button/IconButton';
import AlertDialog from '@/components/UI/AlertDialog/AlertDialog';
import { useMutation } from 'react-query';

const RemoveButton = ({ feedbackId }) => {
  const [showModal, setShowModal] = React.useState(false);
  const queryClient = useQueryClient();
  const { addToast } = useToasts();

  const mutation = useMutation(
    (id) => {
      console.log('mutate id', id);
      deleteFeedback(id);
    },
    {
      onSuccess: async () => {
        addToast('Feedback was removed', {
          appearance: 'success',
          autoDismiss: true
        });

        await queryClient.cancelQueries('feedback');

        const previousValue = queryClient.getQueryData('feedback');
        queryClient.setQueryData('feedback', (old) => ({
          ...old,
          feedback: old.feedback.filter((item) => item.id !== feedbackId)
        }));

        return previousValue;
      },

      onError: () => {
        addToast('There was an error, please try again!', {
          appearance: 'error',
          autoDismiss: true
        });
      }
    }
  );

  const handleDeleteFeedback = () => {
    mutation.mutate(feedbackId);
    setShowModal(false);
  };
  return (
    <>
      <IconButton onClick={() => setShowModal(true)}>
        <Image src="/trash.png" width={20} height={20} alt="remove" />
      </IconButton>
      <AlertDialog
        handleDeleteFeedback={handleDeleteFeedback}
        showModal={showModal}
        setShowModal={setShowModal}
        title="Delete Feedback"
      >
        Are you sure deleting this feedback?
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
