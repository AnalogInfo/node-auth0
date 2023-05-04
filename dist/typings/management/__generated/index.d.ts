export * from '../runtime';
export * from './managers';
export * from './models';
import {
  ActionsManager,
  AnomalyManager,
  AttackProtectionManager,
  BlacklistsManager,
  BrandingManager,
  ClientGrantsManager,
  ClientsManager,
  ConnectionsManager,
  CustomDomainsManager,
  DeviceCredentialsManager,
  EmailTemplatesManager,
  EmailsManager,
  GrantsManager,
  GuardianManager,
  HooksManager,
  JobsManager,
  KeysManager,
  LogStreamsManager,
  LogsManager,
  OrganizationsManager,
  PromptsManager,
  ResourceServersManager,
  RolesManager,
  RulesManager,
  RulesConfigsManager,
  StatsManager,
  TenantsManager,
  TicketsManager,
  UserBlocksManager,
  UsersManager,
  UsersByEmailManager,
} from './managers';
import { Configuration } from '../runtime';
export declare abstract class ManagementClientBase {
  protected configuration: Configuration;
  readonly actions: ActionsManager;
  readonly anomaly: AnomalyManager;
  readonly attackProtection: AttackProtectionManager;
  readonly blacklists: BlacklistsManager;
  readonly branding: BrandingManager;
  readonly clientGrants: ClientGrantsManager;
  readonly clients: ClientsManager;
  readonly connections: ConnectionsManager;
  readonly customDomains: CustomDomainsManager;
  readonly deviceCredentials: DeviceCredentialsManager;
  readonly emailTemplates: EmailTemplatesManager;
  readonly emails: EmailsManager;
  readonly grants: GrantsManager;
  readonly guardian: GuardianManager;
  readonly hooks: HooksManager;
  readonly jobs: JobsManager;
  readonly keys: KeysManager;
  readonly logStreams: LogStreamsManager;
  readonly logs: LogsManager;
  readonly organizations: OrganizationsManager;
  readonly prompts: PromptsManager;
  readonly resourceServers: ResourceServersManager;
  readonly roles: RolesManager;
  readonly rules: RulesManager;
  readonly rulesConfigs: RulesConfigsManager;
  readonly stats: StatsManager;
  readonly tenants: TenantsManager;
  readonly tickets: TicketsManager;
  readonly userBlocks: UserBlocksManager;
  readonly users: UsersManager;
  readonly usersByEmail: UsersByEmailManager;
  constructor(configuration: Configuration);
}
