import Patient from './patient.js';
import readline from 'readline';
import fs from 'fs';

// Define a class to keep track of the patients processed.
class PatientRecords {
  constructor() {
    this.patients = {};
  }

  // Process each line of input
  processInput(line) {
    const inputLine = line.trim().split(' ');
    if (inputLine[0] === 'Patient') {
      this.patients[inputLine[1]] = new Patient(inputLine[1]);
    } else if (inputLine[0] === 'Action') {
      const patient = this.patients[inputLine[2]];
      if (inputLine[1] === 'Intake') {
        patient.addIntake(inputLine[3]);
      } else if (inputLine[1] === 'Discharge') {
        patient.addDischarge(inputLine[3]);
      } else if (inputLine[1] === 'Treatment') {
        patient.addTreatment(inputLine[3], inputLine[4]);
      }
    }
  }

  // processes an entire file of patient data and prints the results
  processFile(filename) {
    const fileStream = fs.createReadStream(filename);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      this.processInput(line);
    });

    rl.on('close', () => {
      for (const patient of Object.values(this.patients)) {
        const [hours, minutes] = patient.getDuration();
        const numTreatments = patient.getNumTreatments();
        console.log(
          `Patient ${patient.name} stayed for ${hours
            .toString()
            .padStart(2, '0')} hours and ${minutes
            .toString()
            .padStart(2, '0')} minutes and received ${numTreatments} treatments`
        );
      }
    });
  }
}

// Example usage: node index.js input.txt
const medasync = new PatientRecords();
medasync.processFile(process.argv[2]);
