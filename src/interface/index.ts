export interface Size {
  price: string;
  status: string;
  variant_id: string;
}

export interface SizeObject {
  [key: string]: Size | undefined;
}

export interface SolidChild {
  size: SizeObject[];
  images: string[];
}

export interface ProductProperty {
  price: string;
  status: string;
  variant_id: string;
}

export interface ProductSizeProps {
  size: string;
  index: number;
  setSelectedSize: (url: string) => void;
  setPrice: (url: string) => void;
  price: string;
  active: boolean;
}

export interface TextContentProps {
  isMobile: boolean;
  name: string;
  type: string;
  description: string;
  price: string;
}