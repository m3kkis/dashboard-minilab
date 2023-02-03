import { Footer, Text, Container } from '@mantine/core';
import { IconTerminal2 } from '@tabler/icons-react';

function AppFooter() {
  return (
    <Footer height={45} p="sm">
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Text
            fz="xs"
            c="dimmed"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Crafted <IconTerminal2 stroke={1} style={{ margin: '0 8 0 8' }} />{' '}
            by m3kkis
          </Text>
        </div>
      </Container>
    </Footer>
  );
}

export default AppFooter;
