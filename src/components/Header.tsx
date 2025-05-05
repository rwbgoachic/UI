import React from 'react';
import { Button } from './buttons/Button';
import { supabase } from '../lib/supabase';
import { Icon } from './Icon';

export function Header() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-900">
            <Icon name="BuildingStorefrontIcon" className="w-8 h-8 inline-block mr-2" />
            PaySurity
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  <Icon name="HomeIcon" className="w-5 h-5 inline-block mr-1" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/transactions" className="text-gray-600 hover:text-gray-900">
                  <Icon name="CurrencyDollarIcon" className="w-5 h-5 inline-block mr-1" />
                  Transactions
                </a>
              </li>
              <li>
                <a href="/settings" className="text-gray-600 hover:text-gray-900">
                  <Icon name="Cog6ToothIcon" className="w-5 h-5 inline-block mr-1" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Button variant="secondary" onClick={handleSignOut}>
          <Icon name="ArrowRightOnRectangleIcon" className="w-5 h-5 inline-block mr-1" />
          Sign Out
        </Button>
      </div>
    </header>
  );
}