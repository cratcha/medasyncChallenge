# Problem Description

The project processes a file of patient data and calculates the duration of their stay and the number of treatments received. The patient data is read from a file, and each line contains information about a patient's action, including Intake, Discharge, and Treatment.

# Approach

Language: JavaScript

To solve the problem, I used two classes, Patient (patient.js) and PatientRecords(index.js). The PatientRecords class is responsible for processing each line of input, building a patient object, and storing it in a dictionary, where the key is the patient's name.

The Patient class, on the other hand, is responsible for calculating the duration of stay and the number of treatments received. It also keeps track of the intake time, discharge time, and treatments received by the patient.

I chose to use OOP principles because they can help make your code more modular, maintainable, and extensible, while also reducing the amount of duplicated code and increasing the flexibility of it.

I used the ES6 syntax for writing classes and modules. I also used the readline and fs modules provided by Node.js to read and process the patient data from the input file.

# Test
To test the input go to src folder and run node index.js input.txt 

# Author

Ekaterina Cratcha