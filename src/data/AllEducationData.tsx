export const AllEducationData : AllEducationDataInterface[] = [
  {
    school: "Boston University, Boston, MA",
    degree: "MS in Computer Science",
    start_date: "string",
    end_date: "Jan 2025",
    gpa: "3.71/4.00",
    description: "Teaching Assistant: Gradaute Distrbuted Systems",
  },
  {
    school: "Thapar Institute of Engineering and Technology, India",
    degree: "BE in Electronics and Communication Engineering",
    start_date: "string",
    end_date: "Jul 2021",
    gpa: "8.84/10.00",
    description: "",
  },
  
];

interface AllEducationDataInterface {
  school: string,
  degree: string,
  start_date: string,
  end_date: string,
  gpa: string,
  description: string,
}