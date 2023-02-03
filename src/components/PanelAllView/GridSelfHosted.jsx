import { createStyles, Text, SimpleGrid, UnstyledButton } from '@mantine/core';

const useStyles = createStyles(theme => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colors.dark[7],
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

function GridSelfHosted({ apps }) {
  const { classes, theme } = useStyles();

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
      ]}
    >
      {apps &&
        apps.map((app, i) => (
          <UnstyledButton
            key={app.name}
            component="a"
            className={classes.item}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <app.icon color={theme.colors[app.color][6]} size={32} />
            <Text size="sm" mt={7}>
              {app.name}
            </Text>
          </UnstyledButton>
        ))}
    </SimpleGrid>
  );
}
export default GridSelfHosted;
