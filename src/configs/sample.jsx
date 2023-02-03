//Grab icons from https://tabler-icons.io/

import { IconServer, IconBookmark } from '@tabler/icons-react';

export const DataStructure = () => ({
  self_hosted: [
    {
      name: '',
      description: {
        cpu: '',
        memory: '',
        storage: '',
        os: '',
      },
      ip: '',
      hosting: [
        {
          icon: IconServer,
          color: '',
          name: '',
          ip: '',
          port: '',
          url: '',
        },
      ],
    },
  ],
  bookmarks: [
    {
      icon: IconBookmark,
      color: '',
      name: '',
      url: '',
    },
  ],
});
