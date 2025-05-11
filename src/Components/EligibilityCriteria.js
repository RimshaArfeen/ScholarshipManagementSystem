


//Eligibility Acc to University

///=============================
export const byUniversity = {
     low: [
       {
         university: "Sabanci University",
         field: "Computer Science"
       },
       {
         university: "Manchester University",
         field: "Computer Engineering"
       },
       {
         university: "Yale University",
         field: "Cyber Security"
       }
     ],
     medium: [
       {
         university: "Sabanci University",
         field: "Cyber Security"
       },
       {
         university: "Manchester University",
         field: "Computer Science"
       },
       {
         university: "Yale University",
         field: "Data Science"
       }
     ],
     high: [
       {
         university: "Sabanci University",
         field: "Artificial Intelligence"
       },
       {
         university: "Yale University",
         field: "Artificial Intelligence"
       },
       {
         university: "Manchester University",
         field: "Data Science"
       }
     ]
   };
////==================================
export const byFaculty = {
     low: [
       {
         faculty: "Computer Science",
         university: "Sabanci University"
       },
       {
         faculty: "Computer Engineering",
         university: "Manchester University"
       },
       {
         faculty: "Cyber Security",
         university: "Yale University"
       }
     ],
     medium: [
       {
         faculty: "Cyber Security",
         university: "Sabanci University"
       },
       {
         faculty: "Computer Science",
         university: "Manchester University"
       },
       {
         faculty: "Data Science",
         university: "Yale University"
       }
     ],
     high: [
       {
         faculty: "Artificial Intelligence",
         university: "Sabanci University"
       },
       {
         faculty: "Artificial Intelligence",
         university: "Yale University"
       },
       {
         faculty: "Data Science",
         university: "Manchester University"
       }
     ]
   };
//===================================================   
   
export const lowEligibilityField = [
     {
          field: "Computer Science",
          university: "Sabanci University"
     },
     {
          field: "Computer Engineering",
          university: "Manchester UNiversity"
     },
     {
          field: "Cyber Security",
          university: "Yale University"
     }
];

export const mediumEligibilityField = [
     {
          field: "Cyber Security",
          university: "Sabanci University"
     },
     {
          field: "Computer Science",
          university: "Manchester University"
     },
     {
          field: "Data Science",
          university: "Yale University"
     }
];

export const highEligibilityField = [
     {
          field: "Artificial Intelligence",
          university: "Sabanci University"
     },
     {
          field: "Artificial Intelligence",
          university: "Yale University"
     },
     {
          field: "Data Science",
          university: "Manchester UNiversity"
     }
];

export const qualifications = [
     { value: "", label: "Select your highest qualification", disabled: true, selected: true },
     { value: "high-school", label: "High School" },
     { value: "bachelors", label: "Bachelor's Degree" },
     { value: "masters", label: "Master's Degree" },
     { value: "phd", label: "PhD" },
     { value: "other", label: "Other" }
];
