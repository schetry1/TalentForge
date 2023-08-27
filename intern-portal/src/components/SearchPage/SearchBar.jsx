import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar() {
  const options = jobFields.map((option) => {
    const stackType = option.type;
    return {
        stackType: stackType,
      ...option,
    };
  });

  return (
    <Autocomplete
    multiple
    className='search-bar'
      id="grouped-demo"
      options={options.sort((a, b) => -b.stackType.localeCompare(a.stackType))}
      groupBy={(option) => option.stackType}
      getOptionLabel={(option) => option.title}
      sx={{ width: 'flex' }}
      renderInput={(params) => <TextField  className='border-none' {...params} label="Search Jobs"/>}
    />
   
  );
}

const jobFields = [
    {title: 'Angular',type: 'Frontend Frameworks' },
    {title: 'Vue.js',type: 'Frontend Frameworks' },
    {title: 'React',type: 'Frontend Frameworks' },
    {title: 'React Native',type: 'Frontend Frameworks' },
    {title: 'Next.js',type: 'Frontend-Frameworks'},
    {title: 'HTML-CSS',type: 'Frontend Frameworks' },
    {title: 'Express',type: 'Backend Frameworks'},
    {title: 'Django',type: 'Backend Frameworks'},
    {title: 'Laravel',type: 'Backend Frameworks'},
    {title: 'Flask',type: 'Backend Frameworks'},
    {title: 'Spring',type: 'Backend Frameworks'},
    {title: 'Ruby on Rails',type: 'Backend Frameworks'},
    {title: 'Node.js',type: 'Backend Frameworks'},
    {title: 'MongoDB',type: 'Database'},
    {title: 'MySQL',type: 'Database'},
    {title: 'PostgreSQL',type: 'Database'},
    {title: 'SQLite',type: 'Database'},
    {title: 'Firebase',type: 'Database'},
    {title: 'AWS',type: 'Cloud Platform'},
    {title: 'Google Cloud',type: 'Cloud Platform'},
    {title: 'Heroku',type: 'Cloud Platform'},
    {title: 'Digital Ocean',type: 'Cloud Platform'},
    {title: 'Netlify',type: 'Cloud Platform'},
    {title: 'Flutter',type: 'App Development'},
    {title: 'Java',type: 'App Development'},
    {title: 'Kotlin',type: 'App Development'},
    {title: 'Swift',type: 'App Development'},
    {title: 'Data Science',type: 'Machine Learning'},
    {title: 'Machine Learning',type: 'Machine Learning'},
    {title: 'Deep Learning',type: 'Machine Learning'},
    {title: 'Natural Language Processing',type: 'Machine Learning' },
    {title: 'Artificial Intelligence',type: 'Machine Learning'},
    {title: 'Computer Vision',type: 'Machine Learning'},
    {title: 'R',type: 'Machine Learning'},
    {title: 'Python',type:'Programming Language'},
    {title: 'C++',type:'Programming Language'},
    {title: 'C#',type:'Programming Language'},
    {title: 'JavaScript',type:'Programming Language'},
    {title: 'TypeScript',type:'Programming Language'},
    {title: 'PHP',type:'Programming Language'},
    {title: 'Go',type:'Programming Language'},
    {title: 'Rust',type:'Programming Language'},
    {title: 'UI/UX',type:'Design'},  
  ];