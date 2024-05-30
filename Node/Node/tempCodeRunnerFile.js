 db.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) throw err;
    console.log('User added:', result);

  });