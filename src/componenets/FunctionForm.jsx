import React, { useState } from "react";

function FunctionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [addressline, setAddressline] = useState("");
  const [students, setStudents] = useState([
    {
      name: "Eric",
      email: "danieloagyapong@gmail.com",
      contact: "0336373635",
      addressline: "accra",
    },
    {
      name: "val",
      email: "Eric@gmail.com",
      contact: "0203949474",
      addressline: "kwabenya",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents(
      [...students, { name, email, contact, addressline }],
      setName(""),
      setEmail(""),
      setContact(""),
      setAddressline("")
    );
  };

  return (
    <>
      <form style={{ margin: "40px" }}>
        <h1>Register Here</h1>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <br />
        <label>Addressline:</label>
        <input
          type="text"
          name="addressline"
          value={addressline}
          onChange={(e) => {
            setAddressline(e.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {students.map((item, index) => {
        return (
          <div style={{ margin: "40px" }} key={index}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.contact}</h3>
            <h3>{item.addressline}</h3>
          </div>
        );
      })}
    </>
  );
}

export default FunctionForm;
