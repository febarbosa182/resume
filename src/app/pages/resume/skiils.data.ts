export interface Skill {
  name: string;
  description: string;
  css?: string;
  level: string;
  icon?: any;
  github?: string;
  info?: string;
}

export const skills: Skill[] = [
  {
    name: "AWS",
    description: "fbr.skill.aws",
    css: "aws-icon",
    level: "100",
    icon: ["fab", "aws"],
    github: "https://github.com/aws",
    info: "http://aws.amazon.com/",
  },
  {
    name: "GCP",
    description: "fbr.skill.gcp",
    css: "gcp-icon",
    level: "80",
    icon: ["fab", "google"],
    github: "https://github.com/GoogleCloudPlatform",
    info: "https://cloud.google.com/",
  },
  {
    name: "Azure",
    description: "fbr.skill.azure",
    css: "azure-icon",
    level: "70",
    icon: ["fab", "microsoft"],
    github: "https://github.com/Azure",
    info: "https://azure.microsoft.com/",
  },
  {
    name: "Kubernetes",
    description: "fbr.skill.kubernetes",
    css: "kubernetes-icon",
    level: "100",
    icon: ["fas", "dharmachakra"],
    github: "https://github.com/kubernetes",
    info: "https://kubernetes.io/",
  },
  {
    name: "Terraform",
    description: "fbr.skill.terraform",
    css: "terraform-icon",
    level: "100",
    icon: ["fas", "code"],
    github: "https://github.com/hashicorp/terraform",
    info: "https://www.terraform.io/",
  },
  {
    name: "Crossplane",
    description: "fbr.skill.terraform",
    css: "crossplane-icon",
    level: "100",
    icon: ["fas", "plane"],
    github: "https://github.com/crossplane/crossplane",
    info: "https://crossplane.io/",
  },
  {
    name: "Ansible",
    description: "fbr.skill.ansible",
    css: "ansible-icon",
    level: "70",
    icon: ["fas", "code"],
    github: "https://github.com/ansible",
    info: "https://www.ansible.com/",
  },
  {
    name: "Helm",
    description: "fbr.skill.helm",
    css: "helm-icon",
    level: "100",
    icon: ["fas", "dharmachakra"],
    github: "https://github.com/helm",
    info: "https://helm.sh/",
  },
  {
    name: "Docker",
    description: "fbr.skill.docker",
    css: "docker-icon",
    level: "100",
    icon: ["fab", "docker"],
    github: "https://github.com/docker",
    info: "https://www.docker.com/",
  },
  {
    name: "NodeJs",
    description: "fbr.skill.nodejs",
    css: "nodejs-icon",
    level: "90",
    icon: ["fab", "node-js"],
    github: "https://github.com/nodejs",
    info: "https://nodejs.org/",
  },
  {
    name: "Angular",
    description: "fbr.skill.angular",
    css: "angular-icon",
    level: "90",
    icon: ["fab", "angular"],
    github: "https://github.com/angular",
    info: "https://angular.io/",
  },
  {
    name: "Java",
    description: "fbr.skill.java",
    css: "java-icon",
    level: "80",
    icon: ["fab", "java"],
    github: "https://github.com/openjdk",
    info: "https://www.java.com/",
  },
];
