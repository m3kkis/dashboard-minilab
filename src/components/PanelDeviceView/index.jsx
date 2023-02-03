import { Paper, Title, Text, Group } from '@mantine/core';
import AccordionApps from './AccordionApps';

import { IconServer } from '@tabler/icons-react';

function PanelDeviceView({ device }) {
  return (
    <>
      <Paper shadow="xs" p="md" withBorder>
        <Group>
          <IconServer />
          <Title>{device.name}</Title>
        </Group>
        <Group>
          <Text>{device.ip}</Text>
          <Text fz="xs" c="dimmed" fs="italic">
            CPU: {device.description.cpu}
          </Text>
          <Text fz="xs" c="dimmed" fs="italic">
            Memory: {device.description.memory}
          </Text>
          <Text fz="xs" c="dimmed" fs="italic">
            Storage: {device.description.storage}
          </Text>
          <Text fz="xs" c="dimmed" fs="italic">
            OS: {device.description.os}
          </Text>
        </Group>
      </Paper>
      <AccordionApps apps={device.hosting} />
    </>
  );
}
export default PanelDeviceView;
