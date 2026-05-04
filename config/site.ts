export const siteConfig = {
  name: 'Tatva Dynamics Pvt Ltd',
  legalName: 'Tatva Dynamics Pvt Ltd',
  tagline: 'Precision Manufacturing. Intelligent Engineering.',
  parentCompany: 'A Tandon Group Company',
  description:
    'Where engineering drawings become precision reality. Trusted by Hitachi, Emerson, and Lucy Electric for sheet metal, CNC, and electrical manufacturing — on time, to spec.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tatvadynamics.com',
  contact: {
    email: 'info@tatvadynamics.com',
    phone: '+91 9545 450 786',
    rfqEmail: 'rfq@tatvadynamics.com',
  },
  address: {
    facility: 'B-79 Ambad, MIDC, Nasik - 422010, Maharashtra, India.',
    corporate: '601, Floral Deck Plaza, Central MIDC Road, Andheri (E), Mumbai, India.',
  },
  social: {
    linkedin: 'https://linkedin.com/company/tatvadynamics',
  },
  certifications: ['ISO Certified', 'Defense Approved'],
  founding: '1999',
  experience: '25+',
} as const
