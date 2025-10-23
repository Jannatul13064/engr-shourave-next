"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHospital,
  FaIndustry,
  FaBuilding,
  FaHeart,
  FaFire,
  FaMedkit,
  FaUserMd,
} from "react-icons/fa";

// Personal Info
const personalInfo = {
  name: "Md. Shahriar Shourave",
  address: "74 The Sky Mark, Flat #C2, 74/B, Green Road, Dhaka, Bangladesh",
  phone: "+88 01711-460062",
  email: "info@advancedabcgroup.com",
  website: "https://engr-shourave-next.vercel.app/",
  dob: "October 15, 1985",
  father: "Malik Abdur Rahim",
  mother: "Sajeda Sultana",
  permanentAddress: "Sirajganj, Bangladesh",
  occupation: "Business",
  religion: "Muslim",
  maritalStatus: "Married",
  nationality: "Bangladeshi",
  languages: "Bengali and English",
  education:
    "Bachelor’s degree in Electrical and Electronic Engineering (EEE), Rajshahi University of Engineering & Technology (RUET)",
};

// Companies List (Expanded)
const companies = [
  {
    name: "ABC Corporation",
    role: "Managing Director",
    address:
      "Navana Zohura Square (3rd Floor), 28 Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh",
    scope:
      "Importation & distribution of IVD equipment, advanced analyzers, laboratory supplies. ISO 9001:2015 certified.",
    icon: <FaHospital className="text-blue-500 w-6 h-6" />,
  },
  {
    name: "ABC Medical System",
    role: "Managing Director",
    address:
      "Navana Zohura Square (3rd Floor), 28 Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh",
    scope:
      "Import & distribution of radiology and medical equipment; Dialysis, Medical, and OTC divisions.",
    icon: <FaMedkit className="text-green-500 w-6 h-6" />,
  },
  {
    name: "SPAR Industries Ltd. (Unit 1)",
    role: "Managing Director",
    address: "Chakchondi, Bohuli, Sirajganj-6700, Bangladesh",
    scope: "Medical diagnostics labware manufacturing.",
    icon: <FaIndustry className="text-yellow-500 w-6 h-6" />,
  },
  {
    name: "SPAR Industries Ltd. (Unit 2)",
    role: "Managing Director",
    address: "Plot: SD03, BSCIC Shilponogori, Horidaspur, Gopalganj",
    scope: "Medical furniture manufacturing.",
    icon: <FaIndustry className="text-yellow-500 w-6 h-6" />,
  },
  {
    name: "SPAR Industries Ltd. (Unit 3)",
    role: "Managing Director",
    address: "BSCIC Industrial Park, Shialkol, Sirajganj",
    scope: "IVD devices manufacturing.",
    icon: <FaIndustry className="text-yellow-500 w-6 h-6" />,
  },
  {
    name: "SPAR Development & Holdings Ltd.",
    role: "Managing Director",
    address:
      "Navana Zohura Square (7th Floor), 28 Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh",
    scope:
      "Luxury real-estate development including SPAR Farrish, SPAR Eden, Hayat Terrace, Noor Tower.",
    icon: <FaBuilding className="text-purple-500 w-6 h-6" />,
  },
  {
    name: "SPAR ALNAJDA Foundation",
    role: "Chairman",
    address:
      "Navana Zohura Square (3rd Floor), 28 Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh",
    scope:
      "Philanthropic foundation focusing on community development and charitable programs.",
    icon: <FaHeart className="text-red-500 w-6 h-6" />,
  },
  {
    name: "Intercontinental Medical Equipment",
    role: "Managing Director",
    address: "8/1, Segunbagicha, Shahbag, Dhaka-1000, Bangladesh",
    scope:
      "Importation and distribution of radiology and imaging equipment like 4D Color Doppler Ultrasound, X-Ray, C-Arm, Mammography.",
    icon: <FaHospital className="text-blue-400 w-6 h-6" />,
  },
  {
    name: "Biohealth",
    role: "Managing Director",
    address:
      "Navana Sattar Garden, Flat-B/7, New Eskaton Road, Dhaka-1217, Bangladesh",
    scope:
      "Importation & distribution of IVD equipment, advancing diagnostic healthcare.",
    icon: <FaMedkit className="text-green-400 w-6 h-6" />,
  },
  {
    name: "Farazy Diagnostic and Hospital Ltd.",
    role: "Director",
    address:
      "Madani Avenue, 100 Feet Road, Baridhara, Notun Bazar, Dhaka-1212, Bangladesh",
    scope:
      "Operation of diagnostic and hospital services, providing comprehensive medical care.",
    icon: <FaHospital className="text-cyan-500 w-6 h-6" />,
  },
  {
    name: "Madani Hospital Ltd.",
    role: "Finance Director",
    address: "Notun Bazar, Vatara, Dhaka-1212, Bangladesh",
    scope:
      "Hospital management and healthcare services, focusing on patient care and medical treatment.",
    icon: <FaHospital className="text-cyan-400 w-6 h-6" />,
  },
  {
    name: "Healthtech Bangladesh Ltd.",
    role: "Managing Director",
    address:
      "Navana Zohura Square (3rd Floor), 28 Kazi Nazrul Islam Avenue, Dhaka-1000, Bangladesh",
    scope:
      "Joint Venture with BRiCM for R&D and manufacturing of COVID Test Kit, Dengue Test Kit, Rapid Test Kits.",
    icon: <FaMedkit className="text-green-600 w-6 h-6" />,
  },
  {
    name: "Farazy Dental & Research Center",
    role: "Director",
    address: "Block-H, Road-8, South Banasree, Dhaka-1219, Bangladesh",
    scope:
      "Dental care and research, offering specialized oral health services and studies.",
    icon: <FaUserMd className="text-pink-500 w-6 h-6" />,
  },
  {
    name: "Parkland Hospital",
    role: "Director",
    address: "Dhanmondi, Dhaka, Bangladesh",
    scope: "Hospital management providing a range of healthcare services.",
    icon: <FaHospital className="text-red-400 w-6 h-6" />,
  },
  {
    name: "Bright Health Specialized Hospital PLC",
    role: "Director",
    address: "M. A. Matin Road, Sirajganj-6700, Bangladesh",
    scope:
      "Specialized hospital services, emphasizing advanced medical treatments and patient care.",
    icon: <FaHospital className="text-red-500 w-6 h-6" />,
  },
  {
    name: "Maa General Hospital & Diagnostic Centre",
    role: "Director",
    address: "257, Bayazid Bostami Road, Chattogram, Bangladesh",
    scope:
      "General hospital and diagnostic operations supporting regional healthcare needs.",
    icon: <FaHospital className="text-blue-600 w-6 h-6" />,
  },
  {
    name: "ABC Fire Safety Pty Ltd.",
    role: "Overseas Director",
    address: "7, 550-554 Punchbowl Road, Lakemba, NSW 2195, Australia",
    scope:
      "Fire safety equipment & services ensuring compliance in commercial & residential settings.",
    icon: <FaFire className="text-orange-500 w-6 h-6" />,
  },
];

export default function CV() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center py-20 px-4 text-gray-200 min-h-screen">
      <motion.div
        id="cv-container"
        className="max-w-5xl w-full bg-gray-800 p-8 rounded-xl shadow-xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/images/personal/profile.png"
            alt="Md Shahriar Shourave"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-sm text-gray-400">{personalInfo.address}</p>
            <p className="text-sm text-gray-400">Phone: {personalInfo.phone}</p>
            <p className="text-sm text-gray-400">Email: {personalInfo.email}</p>
            <p className="text-sm text-gray-400">
              Website:{" "}
              <a className="text-blue-400" href={personalInfo.website}>
                {personalInfo.website}
              </a>
            </p>
          </div>
        </div>

        {/* Professional Profile */}
        <section>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Professional Profile
          </h2>
          <p className="text-gray-300 text-justify leading-relaxed">
            Md. Shahriar Shourave is a dynamic and visionary entrepreneur with
            over a decade of impactful leadership spanning healthcare,
            manufacturing, real estate development, and international trade. He
            exemplifies innovation and resilience, building a diversified
            business empire rooted in excellence and strategic growth. Fluent in
            Bengali and English, he has masterfully navigated complex markets,
            forged high-value partnerships, and driven sustainable expansion
            across multiple industries.
          </p>
        </section>

        {/* Career Details */}
        <section>
          <h2 className="text-xl font-semibold text-blue-400 mb-4">
            Career Details & Company Involvements
          </h2>
          <div className="space-y-4">
            {companies.map((c, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-gray-700 rounded-lg border-l-4 border-blue-500 flex items-start gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>{c.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-gray-400 text-sm">{c.role}</p>
                  <p className="text-gray-400 text-sm">{c.address}</p>
                  <p className="text-gray-300 text-sm mt-1">{c.scope}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Education
          </h2>
          <p className="text-gray-300">{personalInfo.education}</p>
        </section>

        {/* Personal Details */}
        <section>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
            <p>
              <span className="font-semibold">Date of Birth:</span>{" "}
              {personalInfo.dob}
            </p>
            <p>
              <span className="font-semibold">Father Name:</span>{" "}
              {personalInfo.father}
            </p>
            <p>
              <span className="font-semibold">Mother Name:</span>{" "}
              {personalInfo.mother}
            </p>
            <p>
              <span className="font-semibold">Permanent Address:</span>{" "}
              {personalInfo.permanentAddress}
            </p>
            <p>
              <span className="font-semibold">Occupation:</span>{" "}
              {personalInfo.occupation}
            </p>
            <p>
              <span className="font-semibold">Religion:</span>{" "}
              {personalInfo.religion}
            </p>
            <p>
              <span className="font-semibold">Marital Status:</span>{" "}
              {personalInfo.maritalStatus}
            </p>
            <p>
              <span className="font-semibold">Nationality:</span>{" "}
              {personalInfo.nationality}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {personalInfo.languages}
            </p>
          </div>
        </section>

        {/* Declaration */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Declaration
          </h2>
          <p className="text-gray-300 text-justify">
            I hereby declare that all information provided in this profile is
            accurate and based on verified records. Any discrepancies will be
            addressed responsibly.
          </p>
          <p className="mt-2 font-semibold">{personalInfo.name}</p>
          <p className="text-gray-400">
            Group Managing Director, Advanced ABC Group
          </p>
        </section>
      </motion.div>
    </div>
  );
}
