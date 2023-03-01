export const Desire = ({ handleOut, handleDesire }: any) => {
  return (
    <>
      <div className="entorno">
        <h1>Quiere salir?</h1>
        <p>Si no es su deseo salir de la aplicación escoja No</p>
        <div className="botonera">
          <button
            onClick={() => {
              handleDesire();
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              handleOut();
            }}
          >
            Sí
          </button>
        </div>
      </div>
    </>
  );
};
