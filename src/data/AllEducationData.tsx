export const AllEducationData : AllEducationDataInterface[] = [
  {
    school: "Boston University, Boston, MA",
    start_date: "string",
    end_date: "Jan 2025",
    gpa: "3.71/4.00",
    description: "Teaching Assistant: Gradaute Distrbuted Systems",
  },
  {
    school: "Thapar Univeristy, India",
    start_date: "string",
    end_date: "Jul 2021",
    gpa: "8.84/10.00",
    description: "",
  },
  
];

interface AllEducationDataInterface {
  school: string,
  start_date: string,
  end_date: string,
  gpa: string,
  description: string,
}