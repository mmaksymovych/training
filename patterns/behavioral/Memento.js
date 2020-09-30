// Capture and restore an object's internal state

// The Memento pattern provides temporary storage as well as restoration of an object.
// The mechanism in which you store the object’s state depends on the required duration of persistence, which may vary.

const SomeObject = function (prop1, prop2, prop3) {
  this.id = Math.random();
  this.prop1 = prop1;
  this.prop2 = prop2;
  this.prop3 = prop3;
};

SomeObject.prototype = {
  backup: function () {
    const data = JSON.stringify(this);
    return data;
  },

  restore: function (backup) {
    const data = JSON.parse(backup);
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  },
};

const BackupStorage = function () {
  this.backups = {};
};
BackupStorage.prototype = {
  addBackup: function (key, data) {
    this.backups[key] = data;
  },

  getBackup: function (key) {
    const data = this.backups[key];
    delete this.backups.key;
    return data;
  },
};

const storage = new BackupStorage();

const obj = new SomeObject('a', 'b', 'c');
const backup = obj.backup();

storage.addBackup(obj.key, backup);

obj.prop1 = 'bla bla';

console.log('obj', obj);

const data = storage.getBackup(obj.key);
obj.restore(data);

console.log('restored obj', obj);
