function App() {
  return (
    <body
      style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}
    >
      <header
        style={{
          display: "block",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderBottom: "1px solid black",
        }}
      >
        <h2>Manish Chaudhari</h2>
        <p>Web Developer based in NYC.</p>
      </header>
      <main>
        <section
          style={{
            backgroundColor: "#e7f3fe",
            margin: "20px",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <h2>About Me</h2>

          <p>
            I'm proficient in web-development using HTML, CSS, Javascript, React
            and Node.js
          </p>
        </section>
        <section
          style={{
            backgroundColor: "#e2f0d9",
            margin: "20px",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <h2>Projects</h2>

          <section
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid black",
            }}
          >
            <h3>Project one</h3>

            <p>An application made using latet React framework</p>
          </section>
          <section
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid black",
            }}
          >
            <h3> Project Two</h3>
            <p>Shows excellent design and functionality.</p>
          </section>
          <section
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid black",
            }}
          >
            <h3>Project Three</h3>
            <p>An app which has over 100hr of build time.</p>
          </section>
        </section>
      </main>
      <footer
        style={{
          backgroundColor: "#ffe7e7",
          margin: "20px",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        <h2>Contact</h2>
        <p>Email: chaudharimanish07@gmail.com</p>
      </footer>
    </body>
  );
}

export default App;
