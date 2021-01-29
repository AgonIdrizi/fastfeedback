import React from 'react';
import Image from 'next/image';
import IconButton from '@/components/UI/Button/IconButton';
import AlertDialog from '@/components/UI/AlertDialog/AlertDialog';

const RemoveButton = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <IconButton onClick={() => setShowModal(true)}>
        <Image src="/trash.png" width={20} height={20} alt="remove" />
      </IconButton>
      <AlertDialog
        showModal={showModal}
        setShowModal={setShowModal}
        title="Delete Feedback"
      />
    </>
  );
};

export default RemoveButton;
