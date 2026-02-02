# chart-forecast-flexible

## Planned implementation:
- [x] Process questions object --> array for charts
- [ ] Add customParams processing
- [ ] Add `quantiles` parameter
- [ ] Add `quantileConnector` parameter
- [ ] Add `xAxisType` parameter
- [ ] Add `jitter` parameter

## Parameters
`quantiles`:
- `true` ==> within-X monotonicity
- `true` ==> validate that # series is odd and >= 3

`quantileConnector`
- required if `quantiles` = `true`
- `bar`: bar + whisker
- `area`: area version

`xAxisType`