import { AllEducationData } from "../data/AllEducationData"

const Education = () => {
  return (
    <div id="education">
    <h1 className="text-3xl font-bold text-center mt-4 section-title">Education</h1>
    <ul className="ml-4 mt-2">
      {AllEducationData.map((education) => (
        <li className="mb-2 list-disc">
          <span className="font-semibold">
          {education.school}
          </span>
          <span className="italic font-thin"> - {education.end_date}</span>
          <br />
          <span className=" ">GPA: {education.gpa}</span>
          <br />
          <span className="font-light"> {education.description}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Education