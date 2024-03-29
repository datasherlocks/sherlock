# cloud

Agent Helm chart for datasherlocks cloud

![Version: v0.0.1](https://img.shields.io/badge/Version-v0.0.1-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: v0.0.1](https://img.shields.io/badge/AppVersion-v0.0.1-informational?style=flat-square)

## Additional Information

## Installing the Chart

To install the chart with the release name `my-release`:

```console
$ helm repo add datasherlock https://datasherlocks.github.io/sherlock
$ helm install mysql-agent datasherlock/sherlock
```

## Requirements

Kubernetes: `>=1.16.0-0`

## Values

| Key                                | Type   | Default                                                   | Description |
| ---------------------------------- | ------ | --------------------------------------------------------- | ----------- |
| affinity                           | object | `{}`                                                      |             |
| config.database.database           | string | `""`                                                      |             |
| config.database.host               | string | `""`                                                      |             |
| config.database.port               | int    | `3306`                                                    |             |
| config.database.username           | string | `""`                                                      |             |
| config.type                        | string | `"mysql"`                                                 |             |
| deploymentAnnotations              | object | `{}`                                                      |             |
| enableTunnelService                | bool   | `true`                                                    |             |
| fullnameOverride                   | string | `""`                                                      |             |
| image.pullPolicy                   | string | `"Always"`                                                |             |
| image.repository                   | string | `"registry.datasherlocks.io/datasherlocks/datasherlocks"` |             |
| image.tag                          | string | `"v0.0.1"`                                                |             |
| imagePullSecrets                   | list   | `[]`                                                      |             |
| nameOverride                       | string | `""`                                                      |             |
| nodeSelector                       | object | `{}`                                                      |             |
| password                           | string | `""`                                                      |             |
| podSecurityContext                 | object | `{}`                                                      |             |
| probes.liveness.failureThreshold   | int    | `5`                                                       |             |
| probes.liveness.periodSeconds      | int    | `10`                                                      |             |
| probes.readiness.failureThreshold  | int    | `5`                                                       |             |
| probes.readiness.periodSeconds     | int    | `10`                                                      |             |
| probes.startup.failureThreshold    | int    | `30`                                                      |             |
| probes.startup.initialDelaySeconds | int    | `5`                                                       |             |
| probes.startup.periodSeconds       | int    | `10`                                                      |             |
| replicaCount                       | int    | `1`                                                       |             |
| resources.limits.cpu               | string | `"500m"`                                                  |             |
| resources.limits.memory            | string | `"256Mi"`                                                 |             |
| resources.requests.cpu             | string | `"100m"`                                                  |             |
| resources.requests.memory          | string | `"128Mi"`                                                 |             |
| securityContext                    | object | `{}`                                                      |             |
| serviceAccount.annotations         | object | `{}`                                                      |             |
| serviceAccount.create              | bool   | `true`                                                    |             |
| serviceAccount.name                | string | `"cloud"`                                                 |             |
| tolerations                        | list   | `[]`                                                      |             |
| tunnelToken                        | string | `""`                                                      |             |

---

Autogenerated from chart metadata using [helm-docs v1.11.0](https://github.com/norwoodj/helm-docs/releases/v1.11.0)
