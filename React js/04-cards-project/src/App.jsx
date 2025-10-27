import React from "react";
import Card from "./components/Card";
import JobCard from "./components/JobCard";

// tast data
const data = [
  {
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-svg-download-png-461766.png",
    name: "Amazon",
    updateStatus: "5 days ago",
    role: "Senior UI/UX Desiner",
    tags: ["Part-Time", "Senior Level"],
    price: `$${120}/h`,
    city: "Mumbai, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/120px-Google_Favicon_2025.svg.png",
    name: "Google",
    updateStatus: "30 days ago",
    role: "Graphic Desiner",
    tags: ["Part-Time", "Flexible Schedule"],
    price: `$${150 - 220}k`,
    city: "Kochi, India",
  },
  {
    logo: "https://cdn.freebiesupply.com/logos/large/2x/dribbble-5-logo-svg-vector.svg",
    name: "Dribbble",
    updateStatus: "18 days ago",
    role: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    price: `$${85}/h`,
    city: "Kochi, India",
  },
  {
    logo: "https://s3-alpha.figma.com/hub/file/3152337111/0e0f44e4-8de2-49c9-b8f0-406ece8fd1b6-cover.png",
    name: "Figma",
    updateStatus: "30 days ago",
    role: "Graphic Desiner",
    tags: ["Part-Time", "Flexible Schedule"],
    price: `$${150 - 220}k`,
    city: "Kochi, India",
  },
  {
    logo: "https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png",
    name: "Airbnb",
    updateStatus: "30 days ago",
    role: "Graphic Desiner",
    tags: ["Part-Time", "Flexible Schedule"],
    price: `$${150 - 220}k`,
    city: "Kochi, India",
  },
  {
    logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
  },
];

// ChatGPT genrated data
const jobOpenings = [
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA",
  },
  {
    brandLogo:
      "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Cupertino, USA",
  },
  {
    brandLogo:
      "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Los Gatos, USA",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hour",
    location: "Redmond, USA",
  },
  {
    brandLogo:
      "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "New York, USA",
  },
  {
    brandLogo:
      "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Austin, USA",
  },
  {
    brandLogo:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "GPU Programmer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Santa Clara, USA",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Mumbai, India",
  },
  // existing 10 entries here ...
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hour",
    location: "San Jose, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/atlassian-1.svg",
    companyName: "Atlassian",
    datePosted: "3 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hour",
    location: "Sydney, Australia",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Stockholm, Sweden",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    companyName: "Salesforce",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/intel-4.svg",
    companyName: "Intel",
    datePosted: "5 days ago",
    post: "Embedded Systems Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Portland, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg",
    companyName: "PayPal",
    datePosted: "4 days ago",
    post: "Security Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$88/hour",
    location: "Chennai, India",
  },
  {
    brandLogo:
      "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg",
    companyName: "Zoom",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Denver, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    companyName: "LinkedIn",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Sunnyvale, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/shopify-1.svg",
    companyName: "Shopify",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$92/hour",
    location: "Toronto, Canada",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    companyName: "Stripe",
    datePosted: "5 days ago",
    post: "API Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82/hour",
    location: "Dublin, Ireland",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/x-twitter.svg",
    companyName: "X (Twitter)",
    datePosted: "2 weeks ago",
    post: "Mobile Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$77/hour",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/red-hat-3.svg",
    companyName: "Red Hat",
    datePosted: "6 days ago",
    post: "Linux Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Raleigh, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/accenture-4.svg",
    companyName: "Accenture",
    datePosted: "2 weeks ago",
    post: "Software Consultant",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/dropbox-2.svg",
    companyName: "Dropbox",
    datePosted: "1 week ago",
    post: "Site Reliability Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
    companyName: "Spotify",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hour",
    location: "Berlin, Germany",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/hp-4.svg",
    companyName: "HP",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Houston, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/dell-2.svg",
    companyName: "Dell",
    datePosted: "3 weeks ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Round Rock, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/ibm-11.svg",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Delhi, India",
  },
  {
    brandLogo:
      "https://cdn.worldvectorlogo.com/logos/tata-consultancy-services-tcs.svg",
    companyName: "TCS",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$40/hour",
    location: "Kolkata, India",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
    companyName: "Cisco",
    datePosted: "1 week ago",
    post: "Network Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/asus-rog-1.svg",
    companyName: "ASUS",
    datePosted: "6 days ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Taipei, Taiwan",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/samsung-4.svg",
    companyName: "Samsung",
    datePosted: "2 weeks ago",
    post: "Android Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Seoul, South Korea",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/byjus.svg",
    companyName: "Byju's",
    datePosted: "5 days ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/intel-4.svg",
    companyName: "Intel",
    datePosted: "1 week ago",
    post: "Chip Design Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Portland, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/infosys-3.svg",
    companyName: "Infosys",
    datePosted: "3 weeks ago",
    post: "Software Tester",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/wipro-1.svg",
    companyName: "Wipro",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Chennai, India",
  },
  {
    brandLogo:
      "https://cdn.worldvectorlogo.com/logos/capgemini-engineering.svg",
    companyName: "Capgemini",
    datePosted: "4 days ago",
    post: "Automation Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "London, UK",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/hcl-technologies.svg",
    companyName: "HCLTech",
    datePosted: "5 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/zoho-4.svg",
    companyName: "Zoho",
    datePosted: "2 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$45/hour",
    location: "Chennai, India",
  },
  {
    brandLogo:
      "https://cdn.worldvectorlogo.com/logos/adobe-creative-cloud-1.svg",
    companyName: "Adobe",
    datePosted: "1 day ago",
    post: "Creative Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82/hour",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "AI Audio Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "London, UK",
  },
];

const App = () => {
  return (
    <>
      <div className="parent">
        {jobOpenings.map((item, index) => {
          return (
            <Card
              logo={item.brandLogo}
              companyName={item.companyName}
              datePosted={item.datePosted}
              post={item.post}
              tag1={item.tag1}
              tag2={item.tag2}
              pay={item.pay}
              location={item.location}
              key={index}
            />
          );
        })}
      </div>
      {/*  ChatGPT tasks for Props */}
      <JobCard company="Google" position="Frontend Developer" salary="$120k" />
      &nbsp;
      <hr />
      <JobCard company="Meta" position="UI Engineer" salary="$110k" />
    </>
  );
};

export default App;
