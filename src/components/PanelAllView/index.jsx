import { Title } from '@mantine/core';

import GridSelfHosted from './GridSelfHosted';
import GridVms from '../PanelDeviceView/GridVms';
import GridLxcs from '../PanelDeviceView/GridLxcs';
import PanelBookmarksView from '../PanelBookmarksView';

function PanelAllView({ data }) {
  const { self_hosted, bookmarks } = data;
  const deviceAppsList = self_hosted.map(device => device.hosting).flat();
  const deviceVmsList = self_hosted.map(device => device.vms).flat();
  const deviceLxcsList = self_hosted.map(device => device.lxcs).flat();

  return (
    <>
      {deviceAppsList.length > 0 && (
        <>
          <Title mb={32}>Self-hosted</Title>
          <GridSelfHosted apps={deviceAppsList} />
        </>
      )}

      {deviceVmsList.length > 0 && (
        <>
          <Title my={32}>Virtual Machines</Title>
          <GridVms vms={deviceVmsList} />
        </>
      )}

      {deviceLxcsList.length > 0 && (
        <>
          <Title my={32}>Containers</Title>
          <GridLxcs lxcs={deviceLxcsList} />
        </>
      )}
      {bookmarks.length > 0 && (
        <>
          <Title my={32}>Bookmarks</Title>
          <PanelBookmarksView bookmarks={bookmarks} />
        </>
      )}
    </>
  );
}

export default PanelAllView;
