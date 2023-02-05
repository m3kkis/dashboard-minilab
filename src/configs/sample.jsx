//Grab icons from https://tabler-icons.io/

import {
  IconServer,
  IconBookmark,
  IconBrandUbuntu,
  IconBox,
} from '@tabler/icons-react';

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
      vms: [
        {
          icon: IconBrandUbuntu,
          name: '',
          ip: '',
        },
      ],
      lxcs: [
        {
          icon: IconBox,
          name: '',
          ip: '',
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
