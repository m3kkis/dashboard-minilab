import { useState } from 'react';
import {
  Accordion,
  ActionIcon,
  Box,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const AccordionControl = props => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon
        component="a"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        mr={10}
      >
        <IconExternalLink />
      </ActionIcon>
    </Box>
  );
};

function AccordionApps({ apps }) {
  const theme = useMantineTheme();
  const [panels, setPanels] = useState([]);

  return (
    <Accordion
      variant="separated"
      multiple
      chevronPosition="left"
      mt={16}
      value={panels}
      onChange={setPanels}
    >
      {apps.map(app => (
        <Accordion.Item key={app.name} value={`${app.name}`}>
          <AccordionControl url={app.url}>
            <Group sx={{ alignItems: 'center' }}>
              <app.icon color={theme.colors[app.color][4]} />
              <Text fw={700}>{app.name}</Text>
            </Group>
          </AccordionControl>
          <Accordion.Panel>
            <Group position="apart">
              <Text component="span" c="dimmed">
                {app.ip}:{app.port}
              </Text>
              <Text component="span" c="dimmed" fs="italic">
                {app.url}
              </Text>
            </Group>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
export default AccordionApps;
