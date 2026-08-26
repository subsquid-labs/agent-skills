# Portal API Versioning and Change Detection

Portal has no version in its URL or headers. Every client talks to the same surface at `https://portal.sqd.dev`.

## Stable Contract

- Endpoint paths and HTTP methods
- Accepted field names in selectors
- The structured error envelope and its closed set of four `error.type` values
- Published `error.code` values

The surface grows by addition: new fields, dataset families, and datasets can appear without changing what an existing request means.

## Changing State

- Dataset membership and ordering
- Prose in `error.message`
- Worker assignments from dataset state endpoints

Never parse `error.message` or depend on the order of `GET /datasets`. Treat an unknown error code according to its stable `error.type`.

## Automated Change Detection

Diff the machine-readable [Portal OpenAPI specification](https://docs.sqd.dev/openapi.json) or regenerate clients from it. Operations have stable `operationId` values, and selectors are enumerated per dataset family.

Watch [Announcements](https://docs.sqd.dev/announcements) for dataset retirements. Treat `unknown_dataset` as fatal for that dataset, and check announced retirements before assuming a catalog entry is actively ingesting.
