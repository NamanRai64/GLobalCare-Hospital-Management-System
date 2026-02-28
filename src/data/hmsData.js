
export const corporateStructure = {
    group: {
        group_id: 1,
        group_name: "Aurelius Healthcare Group",
        registration_number: "AHG-2024-001",
        headquarters_address: "123 Healthcare Way, Central City",
        contact_email: "corporate@aurelius.com",
        contact_phone: "+1-800-AURELIUS",
        founded_date: "2010-05-15"
    },
    branches: [
        {
            branch_id: 101,
            branch_code: "AUR-CC",
            branch_name: "Aurelius Central City",
            license_number: "LIC-101-2024",
            address: "456 Doctor's Plaza, Central City",
            city: "Central City",
            state: "Metro",
            country: "Healthcare Republic",
            bed_capacity: 500
        }
    ]
};

export const employees = [
    {
        employee_id: 1001,
        branch_id: 101,
        department_id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@aurelius.com",
        phone: "555-0101",
        hire_date: "2020-01-15",
        employment_status: "Active",
        role: "Doctor",
        specialization: "Cardiology",
        license_number: "DOC-2020-001"
    },
    {
        employee_id: 1002,
        branch_id: 101,
        department_id: 2,
        first_name: "Sarah",
        last_name: "Smith",
        email: "sarah.smith@aurelius.com",
        phone: "555-0102",
        hire_date: "2021-03-20",
        employment_status: "Active",
        role: "Nurse",
        certification: "Registered Nurse - ICU"
    },
    {
        employee_id: 1003,
        branch_id: 101,
        department_id: 3,
        first_name: "Mike",
        last_name: "Johnson",
        email: "mike.j@aurelius.com",
        phone: "555-0103",
        hire_date: "2022-06-10",
        employment_status: "Active",
        role: "Administrative",
        designation: "Hospital Manager"
    },
    {
        employee_id: 1004,
        branch_id: 101,
        department_id: 4,
        first_name: "Emma",
        last_name: "Wilson",
        email: "emma.w@aurelius.com",
        phone: "555-0104",
        hire_date: "2023-01-05",
        employment_status: "Active",
        role: "Technician",
        skill_area: "Radiology"
    }
];

export const icuUnits = [
    {
        icu_id: 1,
        branch_id: 101,
        unit_name: "Cardiac ICU",
        beds: [
            { bed_id: 10, bed_number: "CICU-01", status: "Occupied", patient: "Alice Brown" },
            { bed_id: 11, bed_number: "CICU-02", status: "Available", patient: null },
            { bed_id: 12, bed_number: "CICU-03", status: "Available", patient: null }
        ]
    },
    {
        icu_id: 2,
        branch_id: 101,
        unit_name: "Neonatal ICU",
        beds: [
            { bed_id: 20, bed_number: "NICU-01", status: "Occupied", patient: "Baby C" },
            { bed_id: 21, bed_number: "NICU-02", status: "Cleaning", patient: null }
        ]
    }
];

export const inventory = [
    {
        item_id: 1,
        item_name: "Surgical Gloves",
        category: "Consumables",
        quantity: 5000,
        min_threshold: 1000
    },
    {
        item_id: 2,
        item_name: "Ventilator Tubes",
        category: "Equipment",
        quantity: 50,
        min_threshold: 20
    },
    {
        item_id: 3,
        item_name: "Paracetamol 500mg",
        category: "Medicine",
        quantity: 10000,
        min_threshold: 2000
    }
];

export const payrollData = [
    { payroll_id: 1, employee_id: 1001, salary: 15000, pay_date: "2026-02-01" },
    { payroll_id: 2, employee_id: 1002, salary: 6000, pay_date: "2026-02-01" },
    { payroll_id: 3, employee_id: 1003, salary: 8000, pay_date: "2026-02-01" }
];

export const patients = [
    { patient_id: 501, first_name: "Alice", last_name: "Brown", dob: "1985-06-12", gender: "Female", phone: "555-0501" },
    { patient_id: 502, first_name: "Robert", last_name: "Wilson", dob: "1972-11-24", gender: "Male", phone: "555-0502" },
    { patient_id: 503, first_name: "Elena", last_name: "G.", dob: "1992-03-08", gender: "Female", phone: "555-0503" },
    { patient_id: 504, first_name: "James", last_name: "Morten", dob: "1960-09-15", gender: "Male", phone: "555-0504" },
];

export const appointments = [
    { appointment_id: 201, patient_id: 501, doctor_id: 1001, date: "2026-02-26", time: "10:30 AM", status: "Ongoing" },
    { appointment_id: 202, patient_id: 502, doctor_id: 1001, date: "2026-02-26", time: "11:45 AM", status: "Scheduled" },
    { appointment_id: 203, patient_id: 503, doctor_id: 1001, date: "2026-02-27", time: "09:00 AM", status: "Scheduled" },
    { appointment_id: 204, patient_id: 504, doctor_id: 9999, date: "2026-02-26", time: "02:00 PM", status: "Scheduled" }, // Another doctor's appointment
];

export const medicalRecords = [
    {
        record_id: 301,
        patient_id: 501,
        doctor_id: 1001,
        diagnosis: "Hypertension",
        admitted: true,
        location: "Cardiac ICU, Bed CICU-01",
        lab_results: [
            { test: "Blood Pressure", result: "145/95", status: "High", date: "2026-02-26" },
            { test: "Cholesterol", result: "210 mg/dL", status: "Elevated", date: "2026-02-25" }
        ]
    },
    {
        record_id: 302,
        patient_id: 502,
        doctor_id: 1001,
        diagnosis: "Post-Op Recovery",
        admitted: true,
        location: "Recovery Ward, Bed RW-04",
        lab_results: [
            { test: "Blood Glucose", result: "90 mg/dL", status: "Normal", date: "2026-02-26" }
        ]
    },
    {
        record_id: 303,
        patient_id: 503,
        doctor_id: 1001,
        diagnosis: "Acute Bronchitis",
        admitted: false,
        location: null,
        lab_results: [
            { test: "Chest X-Ray", result: "Infection detected in left lower lobe", status: "Alert", date: "2026-02-26" }
        ]
    }
];
