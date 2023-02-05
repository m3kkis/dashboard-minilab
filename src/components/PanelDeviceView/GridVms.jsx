import PropTypes from 'prop-types';
import { Paper, Text, Group, Stack, SimpleGrid } from '@mantine/core';

function GridVms({ vms }) {
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 4, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
      ]}
    >
      {vms.map(vm => (
        <Paper key={vm.name} shadow="xs" p="md">
          <Group>
            <vm.icon />
            <Stack spacing={0}>
              <Text fz="xs">{vm.name}</Text>
              <Text c="dimmed">{vm.ip}</Text>
            </Stack>
          </Group>
        </Paper>
      ))}
    </SimpleGrid>
  );
}

GridVms.propTypes = {
  vms: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string,
      ip: PropTypes.string,
    })
  ),
};

export default GridVms;
