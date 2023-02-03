import {
  Group,
  Header,
  useMantineTheme,
  Title,
  Container,
  MediaQuery,
} from '@mantine/core';
import { IconServerBolt } from '@tabler/icons-react';

function AppHeader() {
  const theme = useMantineTheme();
  return (
    <Header height={{ base: 70, md: 70 }} p="sm">
      <Container>
        <MediaQuery smallerThan="sm" styles={{ justifyContent: 'center' }}>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <Group sx={{ gap: 1, alignItems: 'center' }}>
              <Title sx={{ fontWeight: 'normal' }}>MINI</Title>
              <Title sx={{ fontWeight: 'bold' }}>LAB</Title>
              <IconServerBolt
                size={37}
                style={{ color: theme.colors.yellow[4] }}
              />
            </Group>
          </div>
        </MediaQuery>
      </Container>
    </Header>
  );
}

export default AppHeader;
