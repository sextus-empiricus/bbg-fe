import React from 'react';

interface Props {
   className?: string;
}

const WavesDecorator = ({ className }: Props) => (
   <div className={className}>
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1440 400'>
         <defs>
            <linearGradient id='gradient' x1='18%' x2='82%' y1='88%' y2='12%'>
               <stop offset='5%' stopColor='#9900ef'></stop>
               <stop offset='95%' stopColor='#8ed1fc'></stop>
            </linearGradient>
         </defs>
         <path
            fill='url(#gradient)'
            fillOpacity='0.53'
            strokeWidth='0'
            d='M0 400V133c46.519-.838 93.037-1.675 170 7s184.369 26.863 258 14 113.487-56.775 174-66c60.513-9.225 141.684 16.239 219 27s150.777 6.82 214 14c63.223 7.18 116.206 25.48 182 28 65.794 2.52 144.397-10.74 223-24v267z'
         ></path>
         <defs>
            <linearGradient x1='18%' x2='82%' y1='88%' y2='12%'>
               <stop offset='5%' stopColor='#9900ef'></stop>
               <stop offset='95%' stopColor='#8ed1fc'></stop>
            </linearGradient>
         </defs>
         <path
            fill='url(#gradient)'
            strokeWidth='0'
            d='M0 400V266c57.24 10.837 114.479 21.674 194 19 79.521-2.674 181.324-18.858 249-23 67.676-4.142 101.225 3.757 157 16 55.775 12.243 133.775 28.828 208 25 74.225-3.828 144.676-28.069 206-28 61.324.069 113.521 24.448 183 27 69.479 2.552 156.24-16.724 243-36v134z'
         ></path>
      </svg>
   </div>
);

export { WavesDecorator };
