const db = require("../db");

// Get All Leads
exports.getLeads = (req, res) => {
  const sql = "SELECT * FROM leads";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// Add Lead
exports.addLead = (req, res) => {
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
};

// Update Lead Status
exports.updateLead = (req, res) => {
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
};

// Delete Lead
exports.deleteLead = (req, res) => {
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
};