function LoadingSpinner() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;
