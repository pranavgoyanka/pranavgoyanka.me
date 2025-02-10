import { AllExperienceData } from "../data/AllExperience"

const Experience = () => {
  return (
    <div id="experience">
    <h1 className="text-3xl font-bold text-center mt-4 section-title">Experience</h1>
    <ul className="ml-4 mt-2">
      {AllExperienceData.map((experience) => (
                <li className="mb-2 list-disc text-justify">
                  {experience.url.length > 0 ? (
                    <a href={experience.url} className="underline font-semibold">
                      {experience.company}
                    </a>
                  ) : (
                    <span className="font-semibold">{experience.company}</span>
                  )}
                  <span className="font-thin"> • {experience.start_date} - {experience.end_date}</span>
                  <br />
                  <span className="font-semibold italic">{experience.role}</span>
                  <br />
                  <ul>
                    {experience.description.map((desc) => (
                      <li className="ml-4 list-disc ">
                        <span className="font-light py-0"> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
    </ul>
  </div>
  )
}

export default Experience