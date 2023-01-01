export const ALL_POSTS = `
query AllPosts {
  posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
      nodes {
        id
        date
        title
        slug
        excerpt
      }
  }
}
`;

export const GET_ALL_POSTS_WITH_SLUG = `
{
  posts(first: 10000) {
      nodes {
        slug
      }
  }
}
`;

export const POST_BY_SLUG = `
query PostBySlug($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    title
    excerpt
    author {
      node {
        id
        name
      }
    }
    slug
    date
    tags {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    date
    link
    content
    categories {
      edges {
        node {
          id
          name
        }
      }
    }
    seo {
      cornerstone
      focuskw
      metaDesc
      metaKeywords
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphType
      readingTime
      title
      readingTime
      
    }
  }
}
`;

export const POST_DATA = `
query NewQuery {
  posts {
    edges {
      node {
        featuredImage {
          node {
            caption
            sourceUrl
          }
        }
        title
        content
        slug
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
        author {
          node {
            name
          }
        }
        comments {
          edges {
            node {
              id
              content
            }
          }
          nodes {
            id
          }
        }
        categories {
          edges {
            node {
              count
              name
              slug
            }
          }
        }
      }
    }
  }
}
`;
