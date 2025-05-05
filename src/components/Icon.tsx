import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

type IconProps = {
  name: keyof typeof HeroIcons;
  className?: string;
};

export function Icon({ name, className = "w-6 h-6" }: IconProps) {
  const IconComponent = HeroIcons[name];
  return <IconComponent className={className} aria-hidden="true" />;
}