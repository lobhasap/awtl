const mysql = require('mysql2');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'demoo'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');

  // Perform CRUD operations

  // Create Operation (Insert)
  rl.question('Enter user id: ', (id) => {
    rl.question('Enter username: ', (username) => {
      rl.question('Enter email: ', (email) => {
        const newUser = { id, username, email };
        db.query('INSERT INTO users SET ?', newUser, (err, result) => {
          if (err) throw err;
          console.log('User added:', result);

          // Read Operation (Select)
          db.query('SELECT * FROM users', (err, results) => {
            if (err) throw err;
            console.log('Users:', results);

            // Update Operation
            rl.question('Enter the user id to update: ', (userIdToUpdate) => {
              rl.question('Enter the new username: ', (newUsername) => {
                rl.question('Enter the new email: ', (newEmail) => {
                  const updatedUserData = { username: newUsername, email: newEmail };
                  db.query('UPDATE users SET ? WHERE id = ?', [updatedUserData, userIdToUpdate], (err, result) => {
                    if (err) throw err;
                    console.log('User updated:', result);

                    db.query('SELECT * FROM users', (err, results) => {
                      if (err) throw err;
                      console.log('Users:', results);

                      // Delete Operation
                      rl.question('Enter the user id to delete: ', (userIdToDelete) => {
                        db.query('DELETE FROM users WHERE id = ?', userIdToDelete, (err, result) => {
                          if (err) throw err;
                          console.log('User deleted:', result);

                          db.query('SELECT * FROM users', (err, results) => {
                            if (err) throw err;
                            console.log('Users:', results);

                            // Close connection
                            db.end((err) => {
                              if (err) {
                                console.log(err.message);
                              }
                              console.log('MySQL connection closed');
                              rl.close();
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


