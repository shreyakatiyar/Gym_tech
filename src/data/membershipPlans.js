import Icon1 from '../images/icon-1.svg';
import Icon2 from '../images/icon-2.svg';
import Icon3 from '../images/icon-3.svg';

export const membershipPlans = [
  {
    id: 'gold',
    name: 'Gold',
    price: 79.99,
    icon: Icon1,
    features: [
      '22 pre-built workouts',
      '24/7 Gym access',
      'Access to 4 classes / week',
      'Access to one studio only — chosen by you',
    ],
    popular: false,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 119.99,
    icon: Icon2,
    features: [
      '30 pre-built workouts',
      '24/7 Gym access',
      'Access to 8 classes / week',
      'Unlimited access to all of our studios',
    ],
    popular: true,
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 199.99,
    icon: Icon3,
    features: [
      '50 pre-built workouts',
      '24/7 Gym access',
      'Unlimited access to classes',
      'Unlimited access to all of our studios',
      'Monthly meal plan designed by our scientists',
      '1 Personal training session / Week',
    ],
    popular: false,
  },
];

export default membershipPlans;
