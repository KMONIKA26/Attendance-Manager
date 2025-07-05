import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", present: true },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: true },
  { id: 4, name: "Diana", present: false },
  { id: 5, name: "Eve", present: true },
];

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("All");

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const getFilteredStudents = () => {
    if (filter === "Present") return students.filter((s) => s.present);
    if (filter === "Absent") return students.filter((s) => !s.present);
    return students;
  };

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div style={styles.container}>
      <h1>Attendance Manager</h1>

      <label>
        Filter:{" "}
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.select}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </label>

      <ul style={styles.list}>
        {getFilteredStudents().map((student) => (
          <li
            key={student.id}
            style={{
              ...styles.item,
              backgroundColor: student.present ? "#d4edda" : "#f8d7da",
              color: student.present ? "#155724" : "#721c24",
            }}
          >
            {student.name} - {student.present ? "Present" : "Absent"}
            <button onClick={() => toggleAttendance(student.id)} style={styles.toggleBtn}>
              Toggle
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Present: {presentCount}</h3>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  select: {
    padding: "6px",
    margin: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "4px",
  },
  toggleBtn: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default App;
// This code defines a simple React application that manages student attendance.