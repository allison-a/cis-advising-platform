// Resource types
export type ResourceCategory = 
  | 'academic-planning'
  | 'course-selection'
  | 'scheduling'
  | 'career'
  | 'petition'
  | 'technical'
  | 'wellness';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  isExternal: boolean;
}

// Mock resource data
export const resources: Resource[] = [
  {
    id: 'engineering-handbook',
    title: 'Engineering Handbook',
    description: 'Comprehensive guide to CIS engineering program requirements and policies.',
    url: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/engineering-undergraduate-handbook',
    category: 'academic-planning',
    isExternal: true
  },
  {
    id: 'course-plan',
    title: 'CoursePlan',
    description: 'Interactive tool to plan your courses and track degree requirements.',
    url: 'https://courseplan.io/',
    category: 'course-selection',
    isExternal: true
  },
  {
    id: 'student-center',
    title: 'Student Center',
    description: 'Enroll in classes, view your schedule, and access financial information.',
    url: 'https://studentcenter.cornell.edu/',
    category: 'scheduling',
    isExternal: true
  },
  {
    id: 'degree-audit',
    title: 'Degree Audit',
    description: 'Track your progress toward your degree requirements. (Coming Soon)',
    url: 'https://it.cornell.edu/degreeaudit',
    category: 'academic-planning',
    isExternal: true
  },
  {
    id: 'career-services',
    title: 'CIS Career Services',
    description: 'Resources for internships, full-time positions, and career development.',
    url: 'https://cis.cornell.edu/students/career-resources',
    category: 'career',
    isExternal: true
  },
  {
    id: 'course-roster',
    title: 'Course Roster',
    description: 'Browse all Cornell courses and their descriptions.',
    url: 'https://classes.cornell.edu/',
    category: 'course-selection',
    isExternal: true
  },
  {
    id: 'petition-forms',
    title: 'Petition Forms',
    description: 'Forms for petitioning academic policies and requirements.',
    url: '/petition',
    category: 'petition',
    isExternal: false
  },
  {
    id: 'academic-calendar',
    title: 'Academic Calendar',
    description: 'Important dates and deadlines for the academic year.',
    url: 'https://registrar.cornell.edu/calendar',
    category: 'scheduling',
    isExternal: true
  },
  {
    id: 'class-scheduler',
    title: 'Class Scheduler',
    description: 'Tool to help you create conflict-free schedules.',
    url: 'https://classes.cornell.edu/scheduler/roster/SP25',
    category: 'scheduling',
    isExternal: true
  },
  {
    id: 'computing-resources',
    title: 'CIS Computing Resources',
    description: 'Information about computer labs, software, and technical support.',
    url: 'https://it.cornell.edu/students',
    category: 'technical',
    isExternal: true
  },
  {
    id: 'cis-wellness',
    title: 'CIS Wellness Resources',
    description: 'Resources for maintaining mental and physical health during your studies.',
    url: 'https://health.cornell.edu/',
    category: 'wellness',
    isExternal: true
  }
];

// Group resources by category
export const getResourcesByCategory = () => {
  const grouped: Record<ResourceCategory, Resource[]> = {
    'academic-planning': [],
    'course-selection': [],
    'scheduling': [],
    'career': [],
    'petition': [],
    'technical': [],
    'wellness': []
  };
  
  resources.forEach(resource => {
    grouped[resource.category].push(resource);
  });
  
  return grouped;
};

// Category display names
export const categoryNames: Record<ResourceCategory, string> = {
  'academic-planning': 'Academic Planning',
  'course-selection': 'Course Selection',
  'scheduling': 'Scheduling',
  'career': 'Career Resources',
  'petition': 'Petitions',
  'technical': 'Technical Resources',
  'wellness': 'Wellness'
};