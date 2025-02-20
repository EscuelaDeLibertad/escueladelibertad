import Link from "next/link";
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
        <h2 className="text-lg font-semibold mb-4">
          Uso de sitio web y plataforma e-learning
        </h2>
        <div className="mb-4">
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label htmlFor="accept" className="ml-2 text-sm">
            He leído y acepto las{" "}
            <Link
              href="/terminos-condiciones"
              target="_blank"
              className="underline text-blue-500"
            >
              políticas, términos y condiciones.
            </Link>
            .
          </label>
        </div>
        <button
          className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded"
          onClick={handleAccept}
          disabled={!accepted}
        >
          Aceptar y continuar
        </button>
      </div>
    </div>
  );
};

export default PopUp;
