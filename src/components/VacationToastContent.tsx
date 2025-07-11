import newPic from '../assets/vakantietijd-small.jpg';

export default function VacationToastContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'visible',
      }}
    >
      <img
        src={newPic}
        alt="Vakantie"
        style={{ width: '100%', borderRadius: '6px' }}
      />
    </div>
  );
}
