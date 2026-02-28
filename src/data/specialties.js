import { Brain, Heart, Bone, Baby, UserMinus, Eye, Microscope, Stethoscope } from 'lucide-react';

export const specialtiesData = {
    Cardiology: {
        title: "Cardiology Department",
        description: "Our Cardiology department offers state-of-the-art care for all heart-related conditions. We have a team of world-class interventional cardiologists and surgeons.",
        icon: Heart,
        color: "text-red-500",
        bg: "bg-red-50",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Angioplasty", desc: "Minimally invasive procedure to open blocked arteries." },
            { name: "Bypass Surgery", desc: "Surgical procedure to restore blood flow to the heart." },
            { name: "Pacemaker Implantation", desc: "Device implantation to regulate heart rhythm." },
            { name: "Echocardiography", desc: "Ultrasound test to check heart function." },
            { name: "Cardiac Rehabilitation", desc: "Program to help patients recover from heart attacks." }
        ],
        doctors: [
            { name: "Dr. Sarah West", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Amit Patel", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    Neurology: {
        title: "Neurology & Neurosurgery",
        description: "Specialized care for diseases of the brain, spinal cord, and nerves with advanced diagnostic and therapeutic technology.",
        icon: Brain,
        color: "text-purple-500",
        bg: "bg-purple-50",
        image: "https://images.unsplash.com/photo-1559757175-7b2e9c153724?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Stroke Management", desc: "Rapid treatment for ischemic and hemorrhagic strokes." },
            { name: "Epilepsy Surgery", desc: "Surgical options for drug-resistant epilepsy." },
            { name: "Spine Surgery", desc: "Minimally invasive surgery for disc herniation and stenosis." },
            { name: "Deep Brain Stimulation", desc: "Treatment for Parkinson's disease and tremors." },
            { name: "Neuro-Rehabilitation", desc: "Therapy to aid recovery from nervous system injuries." }
        ],
        doctors: [
            { name: "Dr. James Wilson", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Priya Sharma", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    Orthopedics: {
        title: "Orthopedics & Joint Replacement",
        description: "Comprehensive care for bone and joint disorders, including joint replacements, sports injuries, and trauma.",
        icon: Bone,
        color: "text-amber-500",
        bg: "bg-amber-50",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Knee Replacement", desc: "Total and partial knee replacement surgeries." },
            { name: "Hip Replacement", desc: "Total hip arthroplasty for arthritis and fractures." },
            { name: "Arthroscopy", desc: "Minimally invasive diagnosis and treatment of joint problems." },
            { name: "Fracture Management", desc: "Surgical and non-surgical treatment of bone fractures." },
            { name: "Sports Medicine", desc: "Treatment for sports-related injuries and rehabilitation." }
        ],
        doctors: [
            { name: "Dr. Michael Ross", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Ankit Gupta", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    Pediatrics: {
        title: "Pediatrics & Neonatology",
        description: "Dedicated healthcare for infants, children, and adolescents, including neonatal intensive care.",
        icon: Baby,
        color: "text-pink-500",
        bg: "bg-pink-50",
        image: "https://images.unsplash.com/photo-1618939304348-2629ac96472d?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Vaccination", desc: "Immunization against common childhood diseases." },
            { name: "Neonatal ICU", desc: "Intensive care for premature and ill newborns." },
            { name: "Pediatric Surgery", desc: "Surgical treatment for congenital defects and conditions." },
            { name: "Growth Monitoring", desc: "Tracking physical and developmental growth." },
            { name: "Pediatric Emergency", desc: "24/7 emergency care for children." }
        ],
        doctors: [
            { name: "Dr. Linda Kim", image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Rahul Verma", image: "https://images.unsplash.com/photo-1637059824897-912c371d9d77?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    Oncology: {
        title: "Medical & Surgical Oncology",
        description: "Comprehensive cancer care with a multidisciplinary approach including chemotherapy, radiation, and surgery.",
        icon: UserMinus,
        color: "text-rose-500",
        bg: "bg-rose-50",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Chemotherapy", desc: "Drug treatment to kill cancer cells." },
            { name: "Radiation Therapy", desc: "High-energy radiation to shrink tumors." },
            { name: "Immunotherapy", desc: "Boosting the body's immune system to fight cancer." },
            { name: "Surgical Oncology", desc: "Surgical removal of tumors." },
            { name: "Palliative Care", desc: "Relieving symptoms and improving quality of life." }
        ],
        doctors: [
            { name: "Dr. Emily Chen", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Vikram Singh", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    Ophthalmology: {
        title: "Ophthalmology & Eye Care",
        description: "Advanced eye care services including cataract surgery, LASIK, and treatment of retinal diseases.",
        icon: Eye,
        color: "text-blue-500",
        bg: "bg-blue-50",
        image: "https://images.unsplash.com/photo-1579684453423-f84349ca60df?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Cataract Surgery", desc: "Removal of cloudy lens and replacement with artificial lens." },
            { name: "LASIK", desc: "Laser eye surgery for vision correction." },
            { name: "Glaucoma Treatment", desc: "Medical and surgical management of glaucoma." },
            { name: "Retina Services", desc: "Treatment for diabetic retinopathy and other retinal issues." },
            { name: "Cornea Transplant", desc: "Surgical replacement of damaged cornea." }
        ],
        doctors: [
            { name: "Dr. Neha Gupta", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Rajeev Kumar", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    Gastroenterology: {
        title: "Gastroenterology & Hepatology",
        description: "Diagnosis and treatment of disorders of the digestive system, liver, and pancreas.",
        icon: Microscope,
        color: "text-green-500",
        bg: "bg-green-50",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Endoscopy", desc: "Visual examination of the digestive tract." },
            { name: "Colonoscopy", desc: "Examination of the large intestine." },
            { name: "Liver Transplant", desc: "Surgical replacement of a diseased liver." },
            { name: "ERCP", desc: "Procedure to diagnose and treat bile and pancreatic duct problems." },
            { name: "Gastrointestinal Surgery", desc: "Surgery for conditions affecting the digestive system." }
        ],
        doctors: [
            { name: "Dr. Suresh Reddy", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Kavita Rao", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    },
    "Internal Medicine": {
        title: "Internal Medicine",
        description: "Prevention, diagnosis, and treatment of adult diseases, managing chronic conditions and general health.",
        icon: Stethoscope,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000",
        treatments: [
            { name: "Diabetes Management", desc: "Comprehensive care for managing blood sugar levels." },
            { name: "Hypertension Management", desc: "Treatment and monitoring of high blood pressure." },
            { name: "Infectious Diseases", desc: "Diagnosis and treatment of bacterial, viral, and fungal infections." },
            { name: "Preventive Health Checks", desc: "Regular screenings to detect health issues early." },
            { name: "Geriatric Care", desc: "Specialized care for the elderly." }
        ],
        doctors: [
            { name: "Dr. Robert Patel", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300" },
            { name: "Dr. Sneha Desai", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" }
        ]
    }
};
