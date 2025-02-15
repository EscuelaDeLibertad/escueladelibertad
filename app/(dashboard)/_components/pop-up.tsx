import { useState } from "react";

const PopUp = ({
  onClose,
  userId,
}: {
  onClose: () => void;
  userId: string;
}) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      localStorage.setItem(`acceptedTerms_${userId}`, "true");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Acepta nuestros términos y condiciones
        </h2>
        <div className="mb-4">
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label htmlFor="accept" className="ml-2">
            He leído y acepto los términos y condiciones
          </label>
        </div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleAccept}
          disabled={!accepted}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default PopUp;
