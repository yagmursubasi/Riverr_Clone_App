export type ExtendedFiles = {
  coverImage: { path: string }[];
  images: { path: string }[];
};

export type Query = {
  category?: string;
  search?: string;
  userId?: string;
  min?: string;
  max?: string;
};
export type Filters = {
  user?: string;
  category?: string | { $regex: RegExp };
  title?: {
    $regex?: string;
    $options?: string;
  };
  package_price?: {
    $gte?: number;
    $lte?: number;
  };
};
