import PropTypes from 'prop-types';
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

function PanelBookmarksView({ bookmarks }) {
  const { classes, theme } = useStyles();

  return (
    <SimpleGrid
      cols={6}
      breakpoints={[
        { maxWidth: 'md', cols: 6, spacing: 'md' },
        { maxWidth: 'sm', cols: 3, spacing: 'sm' },
      ]}
    >
      {bookmarks &&
        bookmarks.map(bookmark => (
          <UnstyledButton
            key={bookmark.name}
            component="a"
            className={classes.item}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <bookmark.icon color={theme.colors[bookmark.color][6]} size={32} />
            <Text size="sm" mt={7}>
              {bookmark.name}
            </Text>
          </UnstyledButton>
        ))}
    </SimpleGrid>
  );
}

PanelBookmarksView.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      color: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default PanelBookmarksView;
