"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { motion } from "framer-motion";

type Skill = { name: string; level: number };

export default function SkillsPage() {
  const barSkills: Skill[] = [
    { name: "Strategic Thinking", level: 95 },
    { name: "Decision-Making", level: 90 },
    { name: "Team Leadership", level: 90 },
    { name: "Change Management", level: 85 },
    { name: "Financial Literacy", level: 90 },
    { name: "Business Strategy", level: 90 },
    { name: "Risk Management", level: 80 },
  ];

  const pieSkills: Skill[] = [
    { name: "Leadership", level: 90 },
    { name: "Finance", level: 85 },
    { name: "Operations", level: 80 },
    { name: "Communication", level: 85 },
    { name: "Technical", level: 75 },
  ];

  const radarSkills: Skill[] = [
    { name: "Visionary Thinking", level: 95 },
    { name: "Adaptability", level: 90 },
    { name: "Integrity", level: 100 },
    { name: "Problem-Solving", level: 90 },
    { name: "Networking", level: 85 },
  ];

  const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

  const chartMotion = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="py-16 px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Page Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 pb-4"
        >
          Skills & Strengths
        </motion.h1>

        {/* Pie & Radar Charts */}
        <section className="w-full flex flex-col md:flex-row gap-8 items-stretch">
          {/* Pie Chart */}
          <motion.div
            variants={chartMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="flex-1 rounded-2xl shadow-lg p-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
              Skill Distribution (Pie Chart)
            </h2>
            <div className="w-full h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieSkills}
                    dataKey="level"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    fill="#4f46e5"
                    label
                  >
                    {pieSkills.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            variants={chartMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 rounded-2xl shadow-lg p-4  "
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
              Personal Attributes
            </h2>
            <div className="w-full h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarSkills}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    dataKey="level"
                    stroke="#4f46e5"
                    fill="#4f46e5"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </section>

        {/* Bar Chart */}
        <motion.section
          variants={chartMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="w-full rounded-2xl shadow-lg p-6 "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
            Key Skills
          </h2>
          <div className="w-full h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barSkills}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                <Tooltip />
                <Bar
                  dataKey="level"
                  fill="#4f46e5"
                  radius={[8, 8, 0, 0]}
                  barSize={30}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
