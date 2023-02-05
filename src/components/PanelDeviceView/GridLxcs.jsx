import { Paper, Text, Group, Stack, SimpleGrid } from '@mantine/core';

function GridLxcs({ lxcs }) {
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 4, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
      ]}
    >
      {lxcs.map(lxc => (
        <Paper key={lxc.name} shadow="xs" p="md">
          <Group>
            <lxc.icon />
            <Stack spacing={0}>
              <Text fz="xs">{lxc.name}</Text>
              <Text c="dimmed">{lxc.ip}</Text>
            </Stack>
          </Group>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
export default GridLxcs;
