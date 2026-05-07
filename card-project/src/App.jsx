import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      companyLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      jobPosition: "Frontend Developer",
      jobType: "Full Time",
      salary: "$120/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      jobPosition: "Backend Engineer",
      jobType: "Full Time",
      salary: "$130/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      jobPosition: "Cloud Engineer",
      jobType: "Full Time",
      salary: "$125/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      jobPosition: "iOS Developer",
      jobType: "Part Time",
      salary: "$110/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      jobPosition: "React Developer",
      jobType: "Full Time",
      salary: "$115/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      jobPosition: "UI Engineer",
      jobType: "Part Time",
      salary: "$105/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      jobPosition: "AI Engineer",
      jobType: "Full Time",
      salary: "$150/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      jobPosition: "Software Engineer",
      jobType: "Full Time",
      salary: "$140/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      jobPosition: "Full Stack Developer",
      jobType: "Part Time",
      salary: "$100/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      jobPosition: "DevOps Engineer",
      jobType: "Full Time",
      salary: "$135/hr",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (element, index) {
        return (
          <Card
            key={index}
            logo={element.companyLogo}
            name={element.companyName}
            position={element.jobPosition}
            type={element.jobType}
            salary={element.salary}
          />
        );
      })}
    </div>
  );
};

export default App;
