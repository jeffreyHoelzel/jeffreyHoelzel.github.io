export type ImageMetadata = {
  url: string;
  alt?: string;
};

export type Link = {
  label: string;
  url: string;
};

export type SocialLink = Link & {
  icon?: string;
};

export type ProjectMetadata = {
  slug: string;
  name: string; 
  description: string;
  images: ImageMetadata[]; 
  links?: Record<string, string>;
};

export type HomeMetadata = {
  name: string;
  headline?: string; 
  summary: string;
  avatar?: ImageMetadata; 
  location?: string;
  contact?: Link;
  socials: SocialLink[]; 
  actions: Link[];
};

export type ContactMetadata = {
  name: string;
  headline?: string;
  blurb?: string;
  emailTo?: Link;
  socials: SocialLink[];
}
