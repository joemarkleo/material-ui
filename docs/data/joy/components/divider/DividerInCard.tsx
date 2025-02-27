import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card, { CardProps } from '@mui/joy/Card';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function DividerInCard() {
  const [orientation, setOrientation] =
    React.useState<CardProps['orientation']>('vertical');
  return (
    <Box>
      <Checkbox
        label="horizontal"
        checked={orientation === 'horizontal'}
        onChange={(event) =>
          setOrientation(event.target.checked ? 'horizontal' : 'vertical')
        }
        sx={{ mb: 2 }}
      />
      <Card
        orientation={orientation}
        variant="outlined"
        sx={{ width: 400, maxWidth: '100%', gap: 1.5 }}
      >
        <Typography fontSize="lg" fontWeight="md">
          Headline
        </Typography>
        <Divider />
        <Box sx={{ display: orientation === 'horizontal' ? 'block' : 'contents' }}>
          <Typography level="body-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </Typography>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            endDecorator={<ArrowForward />}
            sx={{ width: '100%', mt: orientation === 'horizontal' ? 2 : 0 }}
          >
            See more
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
