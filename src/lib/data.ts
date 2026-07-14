export type Driver = {
  id: string
  name: string
  rating: number
  trips: number
  experience: string
  ratePerHour: number
  eta: string
  initials: string
  color: string
  tag?: string
  languages: string[]
}

export const DRIVERS: Driver[] = [
  {
    id: 'd1',
    name: 'Oman Richie',
    rating: 4.9,
    trips: 320,
    experience: '8 yrs exp.',
    ratePerHour: 199,
    eta: '2 min',
    initials: 'OR',
    color: '#7C5CFF',
    tag: 'Top Rated',
    languages: ['Tamil', 'English', 'Hindi'],
  },
  {
    id: 'd2',
    name: 'Arjun Kumar',
    rating: 4.8,
    trips: 512,
    experience: '10 yrs exp.',
    ratePerHour: 179,
    eta: '4 min',
    initials: 'AK',
    color: '#FF8A5C',
    tag: 'Most Booked',
    languages: ['Tamil', 'English'],
  },
  {
    id: 'd3',
    name: 'David Paul',
    rating: 4.7,
    trips: 198,
    experience: '5 yrs exp.',
    ratePerHour: 159,
    eta: '6 min',
    initials: 'DP',
    color: '#4FC3A1',
    languages: ['Tamil', 'English', 'Malayalam'],
  },
  {
    id: 'd4',
    name: 'Sanjay Mehta',
    rating: 4.9,
    trips: 740,
    experience: '12 yrs exp.',
    ratePerHour: 229,
    eta: '8 min',
    initials: 'SM',
    color: '#F2C14E',
    tag: 'Premium',
    languages: ['Hindi', 'English', 'Tamil'],
  },
]

export type Trip = {
  id: string
  date: string
  from: string
  to: string
  driver: string
  fare: number
  status: 'completed' | 'cancelled'
  duration: string
}

export const TRIPS: Trip[] = [
  { id: 't1', date: 'Today, 6:42 PM', from: 'Anna Nagar, Chennai', to: 'Phoenix Marketcity', driver: 'Oman Richie', fare: 249, status: 'completed', duration: '38 min' },
  { id: 't2', date: 'Yesterday, 9:15 AM', from: 'T. Nagar', to: 'Chennai Airport', driver: 'Arjun Kumar', fare: 399, status: 'completed', duration: '52 min' },
  { id: 't3', date: '12 Jul, 11:30 PM', from: 'Nungambakkam', to: 'ECR Beach House', driver: 'David Paul', fare: 549, status: 'completed', duration: '1 hr 14 min' },
  { id: 't4', date: '10 Jul, 7:05 PM', from: 'Velachery', to: 'OMR IT Park', driver: 'Sanjay Mehta', fare: 199, status: 'cancelled', duration: '—' },
]

export const SERVICES = [
  { id: 's1', name: 'Hourly', desc: 'Driver by the hour', price: '₹199/hr', popular: true },
  { id: 's2', name: 'One Way', desc: 'Drop at destination', price: '₹12/km', popular: false },
  { id: 's3', name: 'Round Trip', desc: 'Outstation & back', price: '₹10/km', popular: false },
]
