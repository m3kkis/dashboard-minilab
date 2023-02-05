import { AppShell, Container, useMantineTheme, Tabs } from '@mantine/core';
import { DataStructure } from '../configs/data-structure';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import PanelAllView from '../components/PanelAllView';
import PanelDeviceView from '../components/PanelDeviceView';
import PanelBookmarksView from '../components/PanelBookmarksView';

import { IconBookmarks, IconApps, IconServer } from '@tabler/icons-react';

export default function PageDashboard() {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.dark[8],
        },
      }}
      header={<AppHeader />}
      footer={<AppFooter />}
    >
      <Container>
        <Tabs color="yellow.4" defaultValue="all">
          <Tabs.List>
            <Tabs.Tab value="all" icon={<IconApps size={14} />}>
              All
            </Tabs.Tab>
            {{ ...DataStructure() }?.self_hosted?.map((device, i) => {
              return (
                <Tabs.Tab
                  key={`device${i}`}
                  value={device.name}
                  icon={<IconServer size={14} />}
                >
                  {device.name}
                </Tabs.Tab>
              );
            })}
            <Tabs.Tab value="bookmarks" icon={<IconBookmarks size={14} />}>
              Bookmarks
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="all" pt={16}>
            <PanelAllView data={{ ...DataStructure() }} />
          </Tabs.Panel>
          {{ ...DataStructure() }?.self_hosted?.map((device, i) => (
            <Tabs.Panel key={`device${i}`} value={device.name} pt={16}>
              <PanelDeviceView device={device} />
            </Tabs.Panel>
          ))}
          <Tabs.Panel value="bookmarks" pt={16}>
            <PanelBookmarksView bookmarks={{ ...DataStructure() }?.bookmarks} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </AppShell>
  );
}
