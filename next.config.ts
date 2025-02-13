import type { NextConfig } from "next";
import { readFileSync } from 'fs';
import path from 'path';
import https from 'https';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=()'
          }
        ]
      }
    ];
  },
  webServer: {
    https: {
      cert: readFileSync(path.join(process.cwd(), 'certificates/mydomain.crt')),
      key: readFileSync(path.join(process.cwd(), 'certificates/mydomain.key'))
    }
  }
};

export default nextConfig;
