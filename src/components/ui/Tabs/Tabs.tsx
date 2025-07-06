// src/components/ui/Tabs/Tabs.tsx
import { useState, type ReactNode } from 'react';
import * as styles from './Tabs.css';
import { clsx } from 'clsx';

interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

export function Tabs({ items }: { items: TabItem[] }) {
  const [selected, setSelected] = useState(items[0]?.key);

  return (
    <>
      <div className={styles.tabList}>
        {items.map(tab => (
          <button
            key={tab.key}
            className={clsx(
              styles.tabTrigger,
              selected === tab.key && styles.activeTab
            )}
            onClick={() => setSelected(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {items.map(
          tab => selected === tab.key && <div key={tab.key}>{tab.content}</div>
        )}
      </div>
    </>
  );
}
