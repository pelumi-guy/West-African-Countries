import React from 'react';
import CountryModal from './CountryModal';

function ModalTest() {
  const [modalContent, setModalContent] = React.useState(null);

  // Function to handle opening modal with specific content
  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  // Your mapped list data
  const listData = [
    { id: 1, title: 'Item 1', description: 'Description for item 1' },
    { id: 2, title: 'Item 2', description: 'Description for item 2' },
    // Add more items as needed
  ];

  return (
    <div>
      {/* Button to open modal for each item */}
      {listData.map(item => (
        <button key={item.id} onClick={() => openModal(item.title, item.description)}>Open {item.title}</button>
      ))}

      {/* Modal component */}
      {modalContent && <CountryModal title={modalContent.title} content={modalContent.content} />}
      <CountryModal title={modalContent.title} content={modalContent.content} />
    </div>
  );
}

export default ModalTest;
