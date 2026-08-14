import React from 'react'
import Card from './componet/Card'

const App = () => {

  const jobs = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdi7CePpzLnztxk5ogDmxRx62DjJ9DZ1R1jVzyX2qzQ&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$28/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7100eXoXIiaGZDOi4sTIViLg1GGYzJqmz5tFsMTu5Q&s",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$42/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20HUIlJn1mXncHm1EPB9oJ4TIZpfx2ZHohHLk3xj1FQ&s",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$25/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
      companyName: "Infosys",
      datePosted: "2 weeks ago",
      post: ".NET Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$22/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUq1fRpN_duisi9S5o5Mal8EmrliSLXZDSuWChUgzTn2MgvVjhaXzn9D7x&s=10",
      companyName: "TCS",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$20/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRiQfo-aNq4pmvSzxZQ1VAHKsFMeVQE3q6MwtT82N0AQ&s",
      companyName: "IBM",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$38/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrV5nDXGtvMN4ERG99bUP3Ss3Vc-eEGpuVvG6XlVnJqN-DsnLSoRpCbLLD&s=10",
      companyName: "Accenture",
      datePosted: "6 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$26/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://e7.pngegg.com/pngimages/108/569/png-clipart-wipro-consumer-care-the-propshop-exhibition-event-management-company-brand-corporate-identity-it-rsquo-s-a-girl-company-text-thumbnail.png",
      companyName: "Wipro",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$18/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsavIdF71WbkJshsC1dX2yHX7EebtDWDNJYpNXJ4TIw&s",
      companyName: "Cognizant",
      datePosted: "1 week ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$30/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491",
      companyName: "Capgemini",
      datePosted: "3 weeks ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$35/hour",
      location: "Bangalore, India"
    }
  ]

  return (
    <div className="parent">

      {jobs.map(function(props, idx){
        console.log(idx);
        
       
      })}

    </div>
  )
}

export default App