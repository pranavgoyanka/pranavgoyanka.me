import { AllEducationData } from "../data/AllEducationData"

const Education = () => {
  return (
    <div id="education">
    <h1 className="text-3xl font-bold text-center mt-4 section-title">Education</h1>
    <ul className="ml-4 mt-2">
      {AllEducationData.map((education) => (
        <li className="mb-2 list-disc text-justify">
          {education.url.length > 0 ? (
              <a href={education.url} className="underline font-semibold">
                {education.school}
              </a>
            ) : (
              <span className="font-semibold">{education.school}</span>
            )}
          <span className="font-thin"> • {education.end_date}</span>
          <br />
          <span className="font-semibold italic">{education.degree}</span>
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