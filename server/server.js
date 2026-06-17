const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Mini CRM Backend Running...");
});

// GET All Leads
app.get("/leads", (req, res) => {
  const sql = "SELECT * FROM leads";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
});

// ADD New Lead
app.post("/leads", (req, res) => {
  const { name, email, source, status, notes } = req.body;

  const sql =
    "INSERT INTO leads (name, email, source, status, notes) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, source, status, notes],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Lead added successfully",
        id: result.insertId,
      });
    }
  );
});

// UPDATE Lead Status
app.put("/leads/:id", (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const sql = "UPDATE leads SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Lead status updated successfully",
    });
  });
});

// DELETE Lead
app.delete("/leads/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM leads WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Lead deleted successfully",
    });
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});