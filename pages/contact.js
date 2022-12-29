import React from "react";
import styles from "../styles/contact.module.css";

export default function contact() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autoPlay
        loop
        muted
        src="/handbrake.mp4"
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0,
        }}
      />
      <h1
        className={styles.title}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        Marine Voiturier, photographe depuis 30 ans
      </h1>
      <p
        className={styles.text}
        style={{ position: "absolute", right: 20, bottom: 20, color: "white" }}
      >
        Si vous voulez me rencontrer, n'hésitez pas à me contacter sur ma page
        fan et je vous commanderai un livre pour vous montrer comment je peux
        m'améliorer.
      </p>
    </div>
  );
}
