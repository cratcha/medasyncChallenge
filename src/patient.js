//Define a class to represent each patient
export default class Patient {
  constructor(name) {
    this.name = name;
    this.intakeTime = null;
    this.dischargeTime = null;
    this.treatments = [];
  }

  addIntake(time) {
    this.intakeTime = new Date(Date.parse(time));
  }

  addDischarge(time) {
    this.dischargeTime = new Date(Date.parse(time));
  }

  addTreatment(time, code) {
    this.treatments.push({ time, code });
  }

  // Calculate the duration of stay in hours and minutes
  getDuration() {
    if (this.intakeTime && this.dischargeTime) {
      const diff = this.dischargeTime - this.intakeTime;
      const hours = Math.floor(diff / (60 * 60 * 1000));
      const minutes = Math.floor((diff / (60 * 1000)) % 60);
      return [hours, minutes];
    } else {
      return [0, 0];
    }
  }

  // Get the number of treatments received
  getNumTreatments() {
    return this.treatments.length;
  }
}
