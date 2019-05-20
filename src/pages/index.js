import React from 'react'; //, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
import ErrorBoundary from '../common/error-boundary';
import { useFetch } from '../common/hooks';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const { result } = useFetch(process.env.GATSBY_MYREPOS_API_URL, []);

  return (
    <Layout>
      <Box>
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>

      <ErrorBoundary>
        <Gallery
          items={result.map(r => ({
            title: r.name,
            description: r.description,
            url: r.html_url,
          }))}
          title="My Github Projects"
        />
      </ErrorBoundary>
      {/* <div style={{ height: '50vh' }} />
      <IOExample /> */}
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomePageQuery {
    homeJson {
      content {
        childMarkdownRemark {
          html
          frontmatter {
            path
          }
        }
      }
    }
  }
`;
