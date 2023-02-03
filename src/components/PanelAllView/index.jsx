import { Title } from '@mantine/core';

import GridSelfHosted from './GridSelfHosted';
import GridVms from '../PanelDeviceView/GridVms';
import PanelBookmarksView from '../PanelBookmarksView';

function PanelAllView({ data }) {
  const { self_hosted, bookmarks } = data;
  const deviceAppsList = self_hosted.map(device => device.hosting).flat();
  const deviceVmsList = self_hosted.map(device => device.vms).flat();

  return (
    <>
      <Title mb={32}>Self-hosted</Title>
      <GridSelfHosted apps={deviceAppsList} />
      <Title my={32}>VMs</Title>
      <GridVms vms={deviceVmsList} />
      <Title my={32}>Bookmarks</Title>
      <PanelBookmarksView bookmarks={bookmarks} />
    </>
  );
}

export default PanelAllView;
