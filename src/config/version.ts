import packageMetadata from '../../package.json';

export function resolveClientVersion(
  configuredVersion?: string,
  packageVersion?: string,
): string {
  return configuredVersion?.trim() || packageVersion?.trim() || 'unknown';
}

export const CLIENT_VERSION = resolveClientVersion(
  process.env.NEXT_PUBLIC_APP_VERSION,
  packageMetadata.version,
);
