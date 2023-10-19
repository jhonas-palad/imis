
export type Content = {
  id?: any,
  label: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
  content?: Content;
  body?: any;
}

export type Link = {
  id: any,
  label: string;
  href?: null | string;
  description?: string;
  links?: Link[];
  content?:  Content | Content[];
}

export const HEADER_LINKS: Link[]  = [
  {
    id: '1',
    label: 'Find a pro',
    content: [
      {
        id: '1.1',
        label: 'Hire a pro',
        description: 'Get it done, in your way',
        content: {
          label: 'Get it done, in your way',
          description: "Ready to get your task done? Tell us what you need, and we'll find the right service provider for you. Here's list of our top booked services.",
          link: {
            label: 'Get started',
            href:''
          }
        }
      },
      {
        id: '1.2',
        label: 'Service marketplace',
        description: 'Quickly find quality services',
        content: {
          label: 'Quickly find quality services',
          description: "Find, book, and connect with service providers.",
          link: {
            href: '',
            label: 'View all',
          },
        }
      }
    ]
  },
  {
    id: '2',
    label: 'Be a professional',
    links: [
      {
        id:'2.1',
        label: 'Apply now',
        href: '',
        description: 'Take the first step toward a successful and rewarding partnership with us.',
      },
      {
        id:'2.2',
        label: 'Explore some tips',
        href: '',
        description: 'Discover some essentail tips and strategies to increase your chances of getting hired for your services ',
      },
      {
        id:'2.3',
        label: 'Join the community',
        href: '',
        description: "Connect with fellow service providers, share insights, and grow together.",
      },
    ]
  },
  {
    id: '3',
    label: "About us",
    href: "",
  }
] 

