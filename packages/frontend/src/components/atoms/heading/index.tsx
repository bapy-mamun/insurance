import React from 'react';
import './index.scss';

interface HeadingProps {
  // Defines the HTML tag
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const Heading = ({ children, level: Tag = 'h2' }: HeadingProps) => {
  return <Tag className="a-heading">{children}</Tag>;
};
