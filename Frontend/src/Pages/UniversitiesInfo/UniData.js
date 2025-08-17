
//Sabanci University
import img1 from "../../assets/Images/SabanciUni/1.jpg"
import img2 from "../../assets/Images/SabanciUni/2.jpg"
import img3 from "../../assets/Images/SabanciUni/3.jpg"
import img4 from "../../assets/Images/SabanciUni/4.jpg"

//Manchestar University
import _img1 from "../../assets/Images/ManchesterUni/1.jpg"
import _img2 from "../../assets/Images/ManchesterUni/2.jpg"
import _img3 from "../../assets/Images/ManchesterUni/3.jpg"
import _img4 from "../../assets/Images/ManchesterUni/4.jpg"

//Yale University
import Img1 from "../../assets/Images/YaleUni/1.jpg"
import Img2 from "../../assets/Images/YaleUni/2.jpg"
import Img3 from "../../assets/Images/YaleUni/3.jpg"
import Img4 from "../../assets/Images/YaleUni/4.jpg"

export const universities = [

  // University of Sabanci
  {
    name: "Sabancı University",
    location: "Istanbul, Turkey",
    chancellor: "Yusuf Leblebici",
    imgUrl: "https://lh3.googleusercontent.com/p/AF1QipOMGJIbC9YnaFgit5k4WAg0QMw5yZIcDXTh4jUf=s680-w680-h510",
    chancellorImg: "https://actu.epfl.ch/image/71894/1108x622.jpg",
    established: 1996,
    overview: "Sabancı University, located in Istanbul, Turkey, is a modern and dynamic institution recognized for its interdisciplinary education model and strong emphasis on research and innovation. Founded in 1996, the university offers students a flexible curriculum that encourages exploration across disciplines, preparing graduates for global challenges in academia, industry, and entrepreneurship.",
    websiteLink: "https://www.sabanciuniv.edu/en/scholarships",
    ytLink:"https://www.youtube.com/embed/NnrqWox_Yk8",
    scholarships: [
      {
        name: "Sabancı University International Scholarships",
        fieldsCovered: "All undergraduate and graduate IT programs",
        eligibilityCriteria: [
          {
            icon: "public",
            title: "International Applicants",
            description: "International students who fulfill the application requirements"
          },
          {
            icon: "school",
            title: "Academic Excellence",
            description: "Demonstrated strong academic performance"
          },
          {
            icon: "assignment",
            title: "Limited Availability",
            description: "A limited number of scholarships available; competition is keen"
          }
        ],
        benefits: "Full or partial tuition waivers; in some cases, accommodation and living expenses",
        applicationProcess: "Automatic evaluation during the admission process; no separate application required",
        deadline: "Varies with application period",
      },
    ],
    contact: [
      {
        icon: "location_on",
        title: "Address",
        description: "Sabancı University, Orta Mahalle, Üniversite Caddesi No:27, 34956 Tuzla, Istanbul, Turkey"
      },
      {
        icon: "email",
        title: "Email",
        description: "prospective@sabanciuniv.edu"
      },
      {
        icon: "phone",
        title: "Phone",
        description: "+90 216 483 90 00"
      },
    ],
    sliderImgs: [
      img1,
      img2,
      img3, img4
    ]
  },

  // University of Manchester
  {
    name: "University of Manchester",
    location: "Manchester, England, United Kingdom",
    chancellor: "Dame Nancy Rothwell",
    imgUrl: "https://www.mmu.ac.uk/sites/default/files/styles/page_header_half/public/2024-11/20220808-DSC02041-Grosvenor-West.jpg?h=5e25e9b1&itok=flEOFx_x",
    chancellorImg: "https://www.staffnet.manchester.ac.uk/president-and-vc/image-(1).jpg",
    established: 1824,
    overview: "The University of Manchester is one of the UK's leading research-intensive universities, with a global reputation for excellence in science, engineering, humanities, and social sciences. Located in the heart of Manchester, it is known for its historic contributions to research and discovery, diverse international community, and commitment to making a positive impact on society through innovation and education.",
    websiteLink: "https://www.manchester.ac.uk/study/international/finance-and-scholarships/funding/",
    ytLink:"https://www.youtube.com/embed/DQ8s8ntmCmk",

    scholarships: [
      {
        name: "Global Futures Scholarship",
        eligibilityCriteria: [
          {
            icon: "public",
            title: "International Students",
            description: "Applicants from selected countries are eligible"
          },
          {
            icon: "school",
            title: "Academic Merit",
            description: "Strong academic background required"
          },
          {
            icon: "assignment",
            title: "Country-Specific Criteria",
            description: "Eligibility conditions vary by country"
          }
        ],
        benefits: "Up to £24,000 (£8,000 per year over three years)",
        applicationProcess: "Eligible applicants will receive an application form via email after applying to a program",
        deadline: "April 24, 2025",
      }
    ],
    contact: [
      {
        icon: "location_on",
        title: "Address",
        description: "The University of Manchester, Yale Rd, Manchester M13 9PL, United Kingdom"
      },
      {
        icon: "email",
        title: "Email",
        description: "international@manchester.ac.uk"
      },
      {
        icon: "phone",
        title: "Phone",
        description: "+44 161 306 6000"
      }
    ],
    sliderImgs: [
      _img1,
      _img2,
      _img3,
      _img4
    ]
  },

  // Yale University
  {
    name: "Yale University",
    location: "New Haven, Connecticut, USA",
    chancellor: "Peter Salovey",
    imgUrl: "https://wallpaperaccess.com/full/2804870.jpg",
    chancellorImg: "https://president.yale.edu/sites/default/files/styles/medium/public/images/PeterSalovey.jpg",
    established: 1701,
    overview: "Yale University, established in 1701 and located in New Haven, Connecticut, is one of the most prestigious Ivy League institutions in the United States. It is renowned for its rigorous academic programs, influential faculty, and vibrant campus life. With a strong tradition in the liberal arts and leadership in research and public service, Yale continues to shape future leaders across a wide range of disciplines.",
    websiteLink: "https://www.yale.edu/admissions",
    vidLink:"https://youtu.be/68b9qU61EEQ",
    ytLink: "https://www.youtube.com/embed/68b9qU61EEQ",
    scholarships: [
      {
        name: "Yale University Scholarships",
        eligibilityCriteria: [
          {
            icon: "public",
            title: "International & Domestic Students",
            description: "Scholarships available for both U.S. and international students."
          },
          {
            icon: "school",
            title: "Academic Excellence",
            description: "Strong academic performance required."
          },
          {
            icon: "monetization_on",
            title: "Need-Based Aid",
            description: "Financial aid is awarded based on demonstrated need."
          }
        ],
        benefits: "Covers tuition, room, and board depending on financial need.",
        applicationProcess: "Applicants are automatically considered upon admission; FAFSA or CSS Profile may be required.",
        deadline: "Varies by program and application cycle.",
      }
    ],
    contact: [
      {
        icon: "location_on",
        title: "Address",
        description: "Yale University, New Haven, CT 06520, USA"
      },
      {
        icon: "email",
        title: "Email",
        description: "admissions@yale.edu"
      },
      {
        icon: "phone",
        title: "Phone",
        description: "+1 203-432-4771"
      }
    ],
    sliderImgs: [
     Img1,
     Img2,
     Img3,
     Img4
    ]
  }

];

export default universities;
