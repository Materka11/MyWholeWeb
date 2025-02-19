import {
  ReactDark,
  Nextjs,
  Typescript,
  Javascript,
  Redux,
  TailwindcssDark,
  FileTypeScss2,
  Css3,
  Html5,
  ZustandIcon,
  Bootstrap,
  ReactQueryIcon,
  ReactHookFormIcon,
  Styledcomponents,
  Vuejs,
  Firebase,
  Storybook,
  SitecoreIcon,
  RestApiIcon,
  GraphqlDark,
  NodejsWordmark,
  Express,
  MongodbWordmark,
  PostgresqlWordmark,
  MicrosoftsqlserverWordmark,
  Docker,
  Dotnet,
  Git,
  GithubIcon,
  GitlabIcon,
  Swagger,
  Jira,
  Webpack,
  FigmaDark,
  Trello,
  NetlifyDark,
  ViteDark,
  AdobeXd,
} from "../assets/icons/icons";

interface ISkills {
  frontend: ISkill[];
  backend: ISkill[];
  tools: ISkill[];
}

interface ISkill {
  label: string;
  Icon: React.ElementType;
}

export const SKILLS: ISkills = {
  frontend: [
    { label: "React.js", Icon: ReactDark },
    { label: "Next.js", Icon: Nextjs },
    { label: "Typescript", Icon: Typescript },
    { label: "Javascript", Icon: Javascript },
    { label: "Redux", Icon: Redux },
    { label: "Tailwind", Icon: TailwindcssDark },
    { label: "SCSS", Icon: FileTypeScss2 },
    { label: "CSS3", Icon: Css3 },
    { label: "HTML5", Icon: Html5 },
    { label: "React Native", Icon: ReactDark },
    { label: "Zustand", Icon: ZustandIcon },
    { label: "Bootstrap", Icon: Bootstrap },
    { label: "React Query", Icon: ReactQueryIcon },
    { label: "React Hook Form", Icon: ReactHookFormIcon },
    { label: "Styled Components", Icon: Styledcomponents },
    { label: "Vue.js", Icon: Vuejs },
    { label: "Firebase", Icon: Firebase },
    { label: "Storybook", Icon: Storybook },
    { label: "Sitecore", Icon: SitecoreIcon },
  ],
  backend: [
    { label: "REST API", Icon: RestApiIcon },
    { label: "GraphQL", Icon: GraphqlDark },
    { label: "Node.js", Icon: NodejsWordmark },
    { label: "Express.js", Icon: Express },
    { label: "MongoDB", Icon: MongodbWordmark },
    { label: "PostregSQL", Icon: PostgresqlWordmark },
    { label: "SQL Server", Icon: MicrosoftsqlserverWordmark },
    { label: "Docker", Icon: Docker },
    { label: ".NET", Icon: Dotnet },
  ],
  tools: [
    { label: "Git", Icon: Git },
    { label: "Github", Icon: GithubIcon },
    { label: "Gitlab", Icon: GitlabIcon },
    { label: "Swagger", Icon: Swagger },
    { label: "Jira", Icon: Jira },
    { label: "Webpack", Icon: Webpack },
    { label: "Figma", Icon: FigmaDark },
    { label: "Trello", Icon: Trello },
    { label: "Netlify", Icon: NetlifyDark },
    { label: "Vite", Icon: ViteDark },
    { label: "Adobe XD", Icon: AdobeXd },
  ],
};
