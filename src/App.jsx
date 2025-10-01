import QrCard from "./components/QrCard";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-100 p-6">
        <QrCard qr="/images/image-qr-code.png" />
      </div>
    </>
  );
}

export default App;
