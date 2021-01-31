export interface Experience {
  company: string;
  period: string;
  role: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    company: "Easynvest",
    period: "2020-2021",
    role: "fbr.resume.role.specialist",
    description:
      "Kubernetes cluster management, CI/CD, SRE. Development of cloud native applications , distrubuted and dynamic pipelines with Jenkins. Integration of several tools to improve the SDLC, structuring and refactoring old systems, microservices and cloud. Implementation of new Tools and Archtectures",
  },
  {
    company: "Natura",
    period: "2020-2020",
    role: "fbr.resume.role.specialist",
    description:
      "Kubernetes cluster management, CI/CD, SRE nad FinOps. Development of cloud native and event driven applications , GitOps pipelines with ArgoCD. Integration of several tools to improve the SDLC, structuring and refactoring old systems, microservices and cloud. Implementation of new Tools and Archtectures to evolve the environment(On-premise, AWS)",
  },
  {
    company: "Santander",
    period: "2018-2020",
    role: "fbr.resume.role.specialist",
    description:
      "Configuration management, CI/CD/ARA and implementation of the Devops culture across the teams. Development of cloud native applications (Kubernetes and Helm), CI/CD/ARA pipelines for all languages and frameworks(Java, Node, Angular, Android, IOS, Python). SAST (Static Application Security Testing) with Fortify SCA, Fortify CloudScan, Checkmarx, container security with Clair and BlackDuck, SCA(Software Composition Analysis) using Jfrog Xray and BlackDuck, DAST (Dynamic Application Security Testing) using Appscan. Integration of several tools to improve the SDLC, structuring and refactoring old systems, microservices, data  models and cloud. Implementation of machine learning project and environment (On-premise, AWS and Azure), support both data scientists and data engineers, design and evaluate machine learning workflows(Kubeflow and Argoproj).",
  },
  {
    company: "Indra",
    period: "2016-2018",
    role: "fbr.resume.role.software-engineer-senior",
    description:
      "Configuration manager, CI/CD and implementation of the Devops culture across the Company. Development of pipelines with CI/CD/ARA,  with Jenkins (Open source and Cloudbees), Dockerized stack and applications, cluster governance with Rancher and Openshift; implementation, versioning and workflow with Git/GitFlow (GitHub, GitLab e CodeCommit), configuration of registries and repositories (Nexus, Artifactory and Harbour),  quality assurance analysis (SonnarQube and Linter`s), SAST (Static Application Security Testing) with Fortify SCA, Fortify CloudScan, Checkmarx, container security with Clair and BlackDuck, SCA(Software Composition Analysis) using Jfrog Xray and BlackDuck, deploys (Rundeck), Infrastructure automation with Ansible (for all CI/CD stack), ensure reliability and agility, with high availability",
  },
  {
    company: "Agile Solutions",
    period: "2015-2016",
    role: "fbr.resume.role.software-engineer",
    description:
      "Web applications development (frontend: SAPUI5, HTML5, LESS, SASS, Angular2, Angular4 ; backend: HANA XSJS, Node.js, Bower, Gulp), methodology SCRUM and Kanban, business intelligence (data modelling with HANA), code versioning with git, dependency management, environment governance, ALM definition such as  deploy strategy and automations (CD), adapt applications for SAP certifications.",
  },
  {
    company: "Boa VIsta SCPC",
    period: "2014-2015",
    role: "fbr.resume.role.software-engineer",
    description:
      "Change management, focused on ITIL and COBIT processes and practices, to develop and deploy data models and stract analytics reports, document and validate the stages of project's lifecycle and definitions of SLA, SLI and SLO. Implementation of automated tests.",
  },
  {
    company: "Vivo",
    period: "2014-2014",
    role: "fbr.resume.role.software-engineer",
    description:
      "Web applications development (frontend: SAPUI5, HTML5, LESS, SASS, Angular2, Angular4 ; backend: HANA XSJS, Node.js, Bower, Gulp), methodology SCRUM and Kanban, business intelligence (data modelling with HANA), code versioning with git, dependency management, environment governance, ALM definition such as  deploy strategy and automations (CD), adapt applications for SAP certifications.",
  },
  {
    company: "Itaú Unibanco",
    period: "2012-2013",
    role: "fbr.resume.role.software-engineer",
    description:
      "Front end developer with WPF, HTML, CSS and Javascript(AJAX and Jquery), Back end development in C# and ASP.Net. Database architecture and implementation in SQL, Oracle as SAS, code versioning and governance with SVN. Process analyst BPMN, performing documentations and improvements. Design dashboards and reports for business areas to support strategic decisions and insights.",
  },
];
