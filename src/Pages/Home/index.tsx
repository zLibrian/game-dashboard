export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}>
      <div
        style={{
          height: '225px',
          width: '100%',
          backgroundColor: 'blue',
        }}></div>
      <div
        style={{
          height: '150px',
          width: '100%',
          backgroundColor: 'red',
        }}></div>
      <div
        style={{
          height: '225px',
          width: '100%',
          backgroundColor: 'green',
        }}></div>
    </div>
  );
}
