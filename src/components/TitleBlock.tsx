export default function ({ value }: { value: string }) {
  return (
    <div>
      <p className="text-2xl pb-6">
        <b>{value}</b>
      </p>
    </div>
  );
}
