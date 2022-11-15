import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface Stats {
   id: string;
   amount: string;
   title: string;
}

export interface Features {
   id: string;
   icon: OverridableComponent<SvgIconTypeMap>;
   title: string;
   text: string;
}

export interface Details {
   id: string;
   img: string;
   title: string;
   description: string;
}

export interface FooterIconLink {
   id: string;
   img: string;
   link: string;
}

export interface FooterNav {
   id: string;
   title: string;
   items: string[];
}
