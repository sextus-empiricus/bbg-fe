import { Favorite, Shield, VolunteerActivism } from '@mui/icons-material';
import { nanoid } from 'nanoid';

import facebookImg from '../../../assets/icons/facebook.svg';
import instagramImg from '../../../assets/icons/instagram.svg';
import linkedinImg from '../../../assets/icons/linkedin.svg';
import twitterImg from '../../../assets/icons/twitter.svg';
import activeTrades from '../../../assets/img/active-trades.gif';
import historicalTrades from '../../../assets/img/historical-trades.gif';
import {
   Details,
   Features,
   FooterIconLink,
   FooterNav,
   Stats,
} from '../../../types/landing-page.constants';

export const statsData: Stats[] = [
   {
      id: nanoid(),
      amount: '1',
      title: 'user active',
   },
   {
      id: nanoid(),
      amount: '50',
      title: 'trades added',
   },
   {
      id: nanoid(),
      amount: '500$',
      title: 'invests tracked',
   },
];

export const featuresData: Features[] = [
   {
      id: nanoid(),
      icon: VolunteerActivism,
      title: '100% free',
      text: 'Baba Ghanoush use is 100% free',
   },
   {
      id: nanoid(),
      icon: Shield,
      title: '100% safe',
      text: 'No connection to any wallet or exchange',
   },
   {
      id: nanoid(),
      icon: Favorite,
      title: '100% gratifyingly',
      text: 'We do our best but you never know!',
   },
];

export const detailsData: Details[] = [
   {
      id: nanoid(),
      img: activeTrades,
      title: 'Track your profits',
      description:
         'Track your trades easily with a easy-to-read table. Sell when you are on top thanks to dynamically generated data.',
   },
   {
      id: nanoid(),
      img: historicalTrades,
      title: 'Learn from history',
      description:
         'Track history of your trades. Check your profits of each. Sort and filter rows easily by dynamic, interactive data-table.',
   },
];

export const footerIconLinks: FooterIconLink[] = [
   {
      id: nanoid(),
      img: facebookImg,
      link: 'https://facebook.com',
   },
   {
      id: nanoid(),
      img: twitterImg,
      link: 'https://twitter.com/',
   },
   {
      id: nanoid(),
      img: instagramImg,
      link: 'https://instagram.com',
   },
   {
      id: nanoid(),
      img: linkedinImg,
      link: 'https://linkedin.com',
   },
];

export const footerNavs: FooterNav[] = [
   {
      id: nanoid(),
      title: 'Useful links',
      items: ['Content', 'How it works', 'Create', 'Explore', 'Terms & Services'],
   },
   {
      id: nanoid(),
      title: 'Community',
      items: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'],
   },
   {
      id: nanoid(),
      title: 'Partners',
      items: ['Our Partners', 'Become a Partner'],
   },
];
