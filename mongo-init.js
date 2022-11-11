db.createUser({
    user: 'rootusr',
    pwd: 'rootpass',
    roles: [
      {
        role: 'readWrite',
        db: 'telegramManager',
      },
    ],
  });
  