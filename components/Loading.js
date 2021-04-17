import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <center
      style={{
        display: "grid",
        placeItem: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          style={{ marginBottom: "20px" }}
          height={200}
        />
        <Circle color="#3CBC28"></Circle>
      </div>
    </center>
  );
}

export default Loading;
