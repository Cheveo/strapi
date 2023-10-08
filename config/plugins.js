module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 3, // Default is 5
      }
    },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'),
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
    // upload: {
    //   config: {
    //     provider: 'cloudinary',
    //     providerOptions: {
    //       cloud_name: env('CLOUDINARY_NAME'),
    //       api_key: env('CLOUDINARY_KEY'),
    //       api_secret: env('CLOUDINARY_SECRET'),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       delete: {},
    //     },
    //   },
    // },
  });
