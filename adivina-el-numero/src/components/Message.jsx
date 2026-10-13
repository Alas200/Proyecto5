function Message({ mensaje, intentos }) {
  return (
    <div>
      <p><strong>{mensaje}</strong></p>
      <p>Intentos: {intentos}</p>
    </div>
  );
}

export default Message;