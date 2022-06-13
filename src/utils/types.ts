import { ComponentPropsWithoutRef } from "react";

// Component Properties.
export type ButtonProps = {
  rounded?: boolean;
  variant?: "primary" | "secondary" | "filled";
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export type EllipseProps = {
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"div">;

export type PointingButtonProps = {
  variant?: "primary" | "secondary";
  direction?: "up" | "down" | "left" | "right";
} & ComponentPropsWithoutRef<"button">;

export type CardProps = {
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"article">;

export type CardCoverProps = {
  src: string;
  alt?: string;
} & ComponentPropsWithoutRef<"div">;

export type CardBodyProps = {
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

// Feature Properties.
export type NavDropdownProps = {
  isOpen: boolean;
  close: () => void;
};

export type ProductGridHeaderProps = {
  children: React.ReactNode;
  prevButtonProps?: PointingButtonProps;
  nextButtonProps?: PointingButtonProps;
} & ComponentPropsWithoutRef<"div">;

export type ProductGridProps = {
  product?: "therapists" | "blogs";
};

// Object Properties.
export type Therapist = {
  id?: number;
  tags: string[];
  name: string;
  experience: string;
  fields: string[];
  languages: string[];
  fee: string;
};

export type Blog = {
  id?: number;
  date: string;
  title: string;
  author: string;
  tags: string[];
};

export type Process = {
  id?: number;
  title: string;
  description: string;
};
