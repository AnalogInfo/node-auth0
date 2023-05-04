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

export abstract class ManagementClientBase {
  public readonly actions: ActionsManager;
  public readonly anomaly: AnomalyManager;
  public readonly attackProtection: AttackProtectionManager;
  public readonly blacklists: BlacklistsManager;
  public readonly branding: BrandingManager;
  public readonly clientGrants: ClientGrantsManager;
  public readonly clients: ClientsManager;
  public readonly connections: ConnectionsManager;
  public readonly customDomains: CustomDomainsManager;
  public readonly deviceCredentials: DeviceCredentialsManager;
  public readonly emailTemplates: EmailTemplatesManager;
  public readonly emails: EmailsManager;
  public readonly grants: GrantsManager;
  public readonly guardian: GuardianManager;
  public readonly hooks: HooksManager;
  public readonly jobs: JobsManager;
  public readonly keys: KeysManager;
  public readonly logStreams: LogStreamsManager;
  public readonly logs: LogsManager;
  public readonly organizations: OrganizationsManager;
  public readonly prompts: PromptsManager;
  public readonly resourceServers: ResourceServersManager;
  public readonly roles: RolesManager;
  public readonly rules: RulesManager;
  public readonly rulesConfigs: RulesConfigsManager;
  public readonly stats: StatsManager;
  public readonly tenants: TenantsManager;
  public readonly tickets: TicketsManager;
  public readonly userBlocks: UserBlocksManager;
  public readonly users: UsersManager;
  public readonly usersByEmail: UsersByEmailManager;

  constructor(protected configuration: Configuration) {
    this.actions = new ActionsManager(this.configuration);
    this.anomaly = new AnomalyManager(this.configuration);
    this.attackProtection = new AttackProtectionManager(this.configuration);
    this.blacklists = new BlacklistsManager(this.configuration);
    this.branding = new BrandingManager(this.configuration);
    this.clientGrants = new ClientGrantsManager(this.configuration);
    this.clients = new ClientsManager(this.configuration);
    this.connections = new ConnectionsManager(this.configuration);
    this.customDomains = new CustomDomainsManager(this.configuration);
    this.deviceCredentials = new DeviceCredentialsManager(this.configuration);
    this.emailTemplates = new EmailTemplatesManager(this.configuration);
    this.emails = new EmailsManager(this.configuration);
    this.grants = new GrantsManager(this.configuration);
    this.guardian = new GuardianManager(this.configuration);
    this.hooks = new HooksManager(this.configuration);
    this.jobs = new JobsManager(this.configuration);
    this.keys = new KeysManager(this.configuration);
    this.logStreams = new LogStreamsManager(this.configuration);
    this.logs = new LogsManager(this.configuration);
    this.organizations = new OrganizationsManager(this.configuration);
    this.prompts = new PromptsManager(this.configuration);
    this.resourceServers = new ResourceServersManager(this.configuration);
    this.roles = new RolesManager(this.configuration);
    this.rules = new RulesManager(this.configuration);
    this.rulesConfigs = new RulesConfigsManager(this.configuration);
    this.stats = new StatsManager(this.configuration);
    this.tenants = new TenantsManager(this.configuration);
    this.tickets = new TicketsManager(this.configuration);
    this.userBlocks = new UserBlocksManager(this.configuration);
    this.users = new UsersManager(this.configuration);
    this.usersByEmail = new UsersByEmailManager(this.configuration);
  }
}
