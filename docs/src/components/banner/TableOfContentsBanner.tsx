import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import Link from 'docs/src/modules/components/Link';
import FEATURE_TOGGLE from 'docs/src/featureToggle';

export default function TableOfContentsBanner() {
  return FEATURE_TOGGLE.enable_toc_banner ? (
    <Link
      href="https://war.ukraine.ua/support-ukraine/"
      target="_blank"
      sx={[
        (theme) => ({
          mb: 2,
          mx: 0.5,
          p: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          backgroundColor: alpha(theme.palette.grey[50], 0.4),
          border: '1px solid',
          borderColor: (theme.vars || theme).palette.divider,
          borderRadius: 1,
          transitionProperty: 'all',
          transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
          '&:hover, &:focus-visible': {
            backgroundColor: (theme.vars || theme).palette.primary[50],
            borderColor: (theme.vars || theme).palette.primary[200],
          },
        }),
        (theme) =>
          theme.applyDarkStyles({
            backgroundColor: alpha(theme.palette.primary[900], 0.2),
            borderColor: (theme.vars || theme).palette.divider,
            '&:hover, &:focus-visible': {
              backgroundColor: alpha(theme.palette.primary[900], 0.4),
              borderColor: (theme.vars || theme).palette.primaryDark[500],
            },
          }),
      ]}
    >
      <Box sx={{ borderRadius: '3px', overflow: 'auto', width: 'fit-content', flexShrink: 0 }}>
        <Box sx={{ height: 6, width: 16, backgroundColor: '#0057B7' }} />
        <Box sx={{ height: 6, width: 16, backgroundColor: '#FFD700' }} />
      </Box>
      <Typography component="span" variant="caption" fontWeight="medium" color="text.secondary">
        MUI stands in solidarity with Ukraine.
      </Typography>
    </Link>
  ) : null;
}
