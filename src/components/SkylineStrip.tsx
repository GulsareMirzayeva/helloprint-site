import skyline from '../assets/skyline1.png';

export default function SkylineStrip() {
  return (
    <div
      className="w-full min-h-32 bg-repeat-x bg-center transition dark:brightness-75 dark:contrast-100"
      style={{ backgroundImage: `url(${skyline})` }}
    ></div>
  );
}
