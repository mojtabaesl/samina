import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from '../Label';
import { ArrowLeft, Category2 } from '../Icons';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const BaseBreadCrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const crumbs = React.useMemo(() => {
    return items.map(({ name, path }, index) => {
      const isLast = index === items.length - 1;
      return (
        <>
          <li key={path}>
            <Label className={isLast ? 'text-brand-700' : ''}>
              <Link to={path}>{name}</Link>
            </Label>
          </li>
          {isLast ? null : <ArrowLeft />}
        </>
      );
    });
  }, [items]);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-3">
        <Category2 />
        {crumbs.length > 0 ? <ArrowLeft /> : null}
        {crumbs}
      </ol>
    </nav>
  );
};
