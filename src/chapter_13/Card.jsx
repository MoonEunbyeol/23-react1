function Card(props) {
  const { title, backgroundColor, children } = props; 

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;

// children 사용 부분 : Containment 합성 방법
// title과 background 사용 부분 : Specialization 합성 방법