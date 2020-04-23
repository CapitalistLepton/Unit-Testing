class Index {
  static add(a, b) {
    return a + b;
  }

  static add3To(b) {
    return add(3, b);
  }

  static listTable(db) {
    const params = {
      TableName: 'TestTable'
    };
    return db.scan(params);
  }

  static dbPromise(db) {
    const params = {
      Id: '123123'
    };
    return db.get(params);
  }
}
