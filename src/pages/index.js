import React from 'react'; //, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
import ErrorBoundary from '../common/error-boundary';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
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
          items={data.github.viewer.repositories.nodes.map(r =>
            !r.isFork
              ? {
                title: r.name,
                description: r.description,
                url: r.url,
              }
              : null
          )}
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
    github {
      viewer {
        repositories(last: 5) {
          nodes {
            name
            description
            url
            isFork
          }
        }
      }
    }
  }
`;
