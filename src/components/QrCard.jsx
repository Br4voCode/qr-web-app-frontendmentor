function QrCard({ qr }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-80 text-center justify-items-center">
      <img src={qr} alt="QR Code" className="rounded-xl" />
      <div className="m-4 space-y-4">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCard;
