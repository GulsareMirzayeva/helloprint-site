function ErrorPage({ error }: { error: string }) {
  return (
    <div className="flex justify-center pt-60 h-dvh p-6">
      <div className="flex justify-center items-center w-auto h-20">
        <p className="text-xl px-2">Oops! Something went wrong: {error}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
