import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Layout from '../components/Layout';

import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';

const StyledBox = styled(Box)(() => ({
  maxWidth: '880px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '80px auto 40px',
  textDecoration: 'none',
}));

const CardStyleLink = styled(Link)(() => ({
  padding: '18px 18px 24px',
  width: '220px',
  textAlign: 'left',
  color: '#434343',
  border: '1px solid #9b9b9b',
  textDecoration: 'none',
  '&:hover, &.Mui-focusVisible, &.Mui-active': {
    borderColor: '#067df7',
  },
  '& h3': {
    margin: '0',
    color: '#067df7',
    fontSize: '18px',
  },
  '& p': {
    margin: '0',
    padding: '12px 0 0',
    color: '#333',
    fontSize: '13px',
  },
}));

const Index = (): JSX.Element => {
  const t = useTranslations('Index');

  return (
    <Layout>
      <Box component='main' sx={{ width: '100%', color: '#333' }}>
        <Box sx={{
          margin: '0',
          width: '100%',
          paddingTop: '80px',
          lineHeight: '1.15',
        }}>
          <Typography
            component='h1'
            align='center'
            fontSize='48px'
          >
            {t('welcome')}
          </Typography>
        </Box>
        <Typography align='center'>
          {t.rich('navigation', {
            code: () => <code>pages/index.tsx</code>,
          })}
        </Typography>

        <StyledBox>
          <CardStyleLink href="https://nextjs.org/docs">
            <Typography component='h3'>{t('document')} &rarr;</Typography>
            <Typography component='p'>{t('documentDescription')}</Typography>
          </CardStyleLink>
          <CardStyleLink href="https://nextjs.org/learn" className="card">
            <Typography component='h3'>{t('learn')} &rarr;</Typography>
            <Typography component='p'>{t('learnDescription')}</Typography>
          </CardStyleLink>
          <CardStyleLink href="https://github.com/zeit/next.js/tree/master/examples" className="card">
            <Typography component='h3'>{t('examples')} &rarr;</Typography>
            <Typography component='p'>{t('examplesDescription')}</Typography>
          </CardStyleLink>
        </StyledBox>
      </Box>
    </Layout>
  );
};


export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}

export default Index;
